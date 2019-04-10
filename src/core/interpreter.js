/**
 * @file interpreter.js
 * Contains logic for the interpreter
 */

import util from './util.js';

/**
 * Receives an event and an array of Bindings (element -> gesture handler)
 * to determine what event will be emitted. Called from the arbiter.
 * @param {Array} bindings - An array containing Binding objects
 * that associate the element to an event handler.
 * @param {Object} event - The event emitted from the window.
 * @param {Object} state - The state object of the current listener.
 * @return {Object | null} - Returns an object containing a binding and
 * metadata, or null if a gesture will not be emitted.
 */
function interpreter(bindings, event, state) {
  const evType = util.normalizeEvent[ event.type ];
  const events = state.inputs.map( input => input.current );

  const candidates = bindings.reduce( (accumulator, binding) => {
    const data = binding.gesture[evType](state.inputs, state, binding.element);
    if (data) accumulator.push({ binding, data, events });
    return accumulator;
  }, []);

  return candidates;
}

export default interpreter;
