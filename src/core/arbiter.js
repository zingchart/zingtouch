/**
 * @file arbiter.js
 * Contains logic for the dispatcher
 */

import dispatcher from './dispatcher.js';
import interpreter from './interpreter.js';
import util from './util.js';

/**
 * Function that handles event flow, negotiating with the interpreter,
 * and dispatcher.
 * 1. Receiving all touch events in the window.
 * 2. Determining which gestures are linked to the target element.
 * 3. Negotiating with the Interpreter what event should occur.
 * 4. Sending events to the dispatcher to emit events to the target.
 * @param {Event} event - The event emitted from the window object.
 * @param {Object} region - The region object of the current listener.
 */
function arbiter(event, region) {
  const state = region.state;
  const eventType = util.normalizeEvent[ event.type ];

  /*
   Return if a gesture is not in progress and won't be. Also catches the case
   where a previous event is in a partial state (2 finger pan, waits for both
   inputs to reach touchend)
   */
  if (state.inputs.length === 0 && eventType !== 'start') {
    return;
  }

  /*
   Check for 'stale' or events that lost focus
   (e.g. a pan goes off screen/off region.)
   Does not affect mobile devices.
   */
  if (typeof event.buttons !== 'undefined' &&
    eventType !== 'end' &&
    event.buttons === 0) {
    state.resetInputs();
    return;
  }

  // Update the state with the new events. If the event is stopped, return;
  if (!state.updateInputs(event, region.element)) {
    return;
  }

  // Retrieve the initial target from any one of the inputs
  const bindings = state.retrieveBindingsByInitialPos();
  if (bindings.length > 0) {
    if (region.preventDefault) {
      util.setMSPreventDefault(region.element);
      util.preventDefault(event);
    } else {
      util.removeMSPreventDefault(region.element);
    }

    const toBeDispatched = {};
    const gestures = interpreter(bindings, event, state);

    /* Determine the deepest path index to emit the event
     from, to avoid duplicate events being fired. */

    const path = util.getPropagationPath(event);
    gestures.forEach((gesture) => {
      const id = gesture.binding.gesture.getId();
      if (toBeDispatched[id]) {
        if (util.getPathIndex(path, gesture.binding.element) <
          util.getPathIndex(path, toBeDispatched[id].binding.element)) {
          toBeDispatched[id] = gesture;
        }
      } else {
        toBeDispatched[id] = gesture;
      }
    });

    Object.keys(toBeDispatched).forEach((index) => {
      const gesture = toBeDispatched[index];
      dispatcher(gesture.binding, gesture.data, gesture.events);
    });
  }

  let endCount = 0;
  state.inputs.forEach((input) => {
    if (input.getCurrentEventType() === 'end') {
      endCount++;
    }
  });

  if (endCount === state.inputs.length) {
    state.resetInputs();
  }
}

export default arbiter;
