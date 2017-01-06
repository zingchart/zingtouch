/**
 * @file DoubleTap.js
 * Contains the DoubleTap class
 */

import Tap from './Tap.js';
import util from './../core/util.js';

const DEFAULT_MIN_DELAY_MS = 0;
const DEFAULT_MAX_DELAY_MS = 600;
const DEFAULT_INPUTS = 1;
const DEFAULT_MOVE_PX_TOLERANCE = 10;

/**
 * A Tap is defined as a touchstart to touchend event in quick succession.
 * @class Tap
 */
class DoubleTap extends Tap {
  /**
   * Constructor function for the Tap class.
   * @param {Object} [options] - The options object.
   * @param {Number} [options.minDelay=0] - The minimum delay between a
   * touchstart and touchend can be configured in milliseconds.
   * @param {Number} [options.maxDelay=300] - The maximum delay between a
   * touchstart and touchend can be configured in milliseconds.
   * @param {Number} [options.numInputs=1] - Number of inputs for Tap gesture.
   * @param {Number} [options.tolerance=10] - The tolerance in pixels
   *  a user can move.
   */
  constructor(options) {
    super();

    /**
     * The type of the Gesture.
     * @type {String}
     */
    this.type = 'double-tap';
    this.maxDelay = 600;
  }

  /**
   * Event hook for the start of a gesture. Keeps track of when the inputs
   * trigger the start event.
   * @param {Array} inputs - The array of Inputs on the screen.
   * @return {null} - Tap does not trigger on a start event.
   */
  start(inputs) {
    if (inputs.length === this.numInputs) {
      inputs.forEach((input) => {
        let progress = input.getGestureProgress(this.type);
        if (typeof progress.numTaps === 'undefined') {
          progress.start = new Date().getTime();
          progress.numTaps = 1;
        } else {
          progress.numTaps++;
        }
      });
    }
    return null;
  }

  /**
   * Event hook for the move of a gesture. The Tap event reaches here if the
   * user starts to move their input before an 'end' event is reached.
   * @param {Array} inputs - The array of Inputs on the screen.
   * @param {Object} state - The state object of the current region.
   * @param {Element} element - The element associated to the binding.
   * @return {null} - Tap does not trigger on a move event.
   */
  move(inputs, state, element) {
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].getCurrentEventType() === 'move') {
        let current = inputs[i].current;
        let previous = inputs[i].previous;
        if (!util.isWithin(
            current.x,
            current.y,
            previous.x,
            previous.y,
            this.tolerance)) {
          let type = this.type;
          inputs.forEach(function(input) {
            input.resetProgress(type);
          });

          return null;
        }
      }
    }

    return null;
  }

  /**
   * Event hook for the end of a gesture.
   * Determines if this the tap event can be fired if the delay and tolerance
   * constraints are met. Also waits for all of the inputs to be off the screen
   * before determining if the gesture is triggered.
   * @param {Array} inputs - The array of Inputs on the screen.
   * @return {null|Object} - null if the gesture is not to be emitted,
   * Object with information otherwise. Returns the interval time between start
   * and end events.
   */
  end(inputs) {
    let startTime = Number.MAX_VALUE;

    // Obtain the most recent tap interval.
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      const progress = input.getGestureProgress(this.type);
      if (!progress.start || progress.numTaps !== 2) {
        return null;
      } else if (progress.start < startTime) {
        startTime = progress.start;
      }
    }

    const interval = new Date().getTime() - startTime;

    // Reset the gesture whether or not it passes the interval check.
    let type = this.type;
    inputs.forEach(function(input) {
      input.resetProgress(type);
    });

    if ((this.minDelay <= interval) && (this.maxDelay >= interval)) {
      return {
        interval: interval,
      };
    } else {
      return null;
    }
  }
}

export default DoubleTap;
