/**
 * @file Pan.js
 * Contains the Pan class
 */

import Gesture from './Gesture.js';
import util from './../core/util.js';

const DEFAULT_INPUTS = 1;
const DEFAULT_MIN_THRESHOLD = 1;

/**
 * A Pan is defined as a normal movement in any direction on a screen.
 * Pan gestures do not track start events and can interact with pinch and \
 *  expand gestures.
 * @class Pan
 */
class Pan extends Gesture {
  /**
   * Constructor function for the Pan class.
   * @param {Object} [options] - The options object.
   * @param {Number} [options.numInputs=1] - Number of inputs for the
   *  Pan gesture.
   * @param {Number} [options.threshold=1] - The minimum number of
   * pixels the input has to move to trigger this gesture.
   */
  constructor(options) {
    super();

    /**
     * The type of the Gesture.
     * @type {String}
     */
    this.type = 'pan';

    /**
     * The number of inputs to trigger a Pan can be variable,
     * and the maximum number being a factor of the browser.
     * @type {Number}
     */
    this.numInputs = (options && options.numInputs) ?
      options.numInputs : DEFAULT_INPUTS;

    /**
     * The minimum amount in pixels the pan must move until it is fired.
     * @type {Number}
     */
    this.threshold = (options && options.threshold) ?
      options.threshold : DEFAULT_MIN_THRESHOLD;
  }

  /**
   * Event hook for the start of a gesture. Marks each input as active,
   * so it can invalidate any end events.
   * @param {Array} inputs
   */
  start(inputs) {
    inputs.forEach((input) => {
      let progress = input.getGestureProgress(this.getId());
      progress.active = true;
      progress.lastEmitted = {
        x: input.current.x,
        y: input.current.y,
      };
    });
  }

  /**
   * move() - Event hook for the move of a gesture.
   * Fired whenever the input length is met, and keeps a boolean flag that
   * the gesture has fired at least once.
   * @param {Array} inputs - The array of Inputs on the screen
   * @param {Object} state - The state object of the current region.
   * @param {Element} element - The element associated to the binding.
   * @return {Object} - Returns the distance in pixels between the two inputs.
   */
  move(inputs, state, element) {
    if (this.numInputs === inputs.length) {
      var output = {
        data: [],
      };
      for (let i = 0; i < inputs.length; i++) {
        let progress = inputs[i].getGestureProgress(this.getId());

        let reachedThreshold = false;

        // Check threshold distance
        const yThreshold = Math.abs(inputs[i].current.y -
            progress.lastEmitted.y) > this.threshold;
        const xThreshold = Math.abs(inputs[i].current.x -
            progress.lastEmitted.x) > this.threshold;
        reachedThreshold = yThreshold || xThreshold;

        if (progress.active && reachedThreshold) {
          output.data[i] = {
            distanceFromOrigin: util.distanceBetweenTwoPoints(
              inputs[i].initial.x,
              inputs[i].current.x,
              inputs[i].initial.y,
              inputs[i].current.y),
            directionFromOrigin: util.getAngle(
              inputs[i].initial.x,
              inputs[i].initial.y,
              inputs[i].current.x,
              inputs[i].current.y),
            currentDirection: util.getAngle(
              progress.lastEmitted.x,
              progress.lastEmitted.y,
              inputs[i].current.x,
              inputs[i].current.y),
            movement: {
              x: inputs[i].current.x - progress.lastEmitted.x,
              y: inputs[i].current.y - progress.lastEmitted.y,
            },
          };
          progress.lastEmitted.x = inputs[i].current.x;
          progress.lastEmitted.y = inputs[i].current.y;
        } else {
          return null;
        }
      }
    }

    return output;
  }

  /* move*/

  /**
   * end() - Event hook for the end of a gesture. If the gesture has at least
   * fired once, then it ends on the first end event such that any remaining
   * inputs will not trigger the event until all inputs have reached the
   * touchend event. Any touchend->touchstart events that occur before all
   * inputs are fully off the screen should not fire.
   * @param {Array} inputs - The array of Inputs on the screen
   * @return {null} - null if the gesture is not to be emitted,
   *  Object with information otherwise.
   */
  end(inputs) {
    inputs.forEach((input) => {
      let progress = input.getGestureProgress(this.getId());
      progress.active = false;
    });
    return null;
  }

  /* end*/
}

export default Pan;
