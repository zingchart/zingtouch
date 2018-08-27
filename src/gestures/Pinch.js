/**
 * @file Pinch.js
 * Contains the abstract Pinch class
 */

import Gesture from './Gesture.js';
import util from './../core/util.js';

const DEFAULT_INPUTS = 2;
const DEFAULT_MIN_THRESHOLD = 1;

/**
 * A Pinch is defined as two inputs moving either together or apart.
 * @class Pinch
 */
class Pinch extends Gesture {
  /**
   * Constructor function for the Pinch class.
   * @param {Object} options
   */
  constructor(options) {
    super();

    /**
     * The type of the Gesture.
     * @type {String}
     */
    this.type = 'pinch';

    /**
     * The minimum amount in pixels the inputs must move until it is fired.
     * @type {Number}
     */
    this.threshold = (options && options.threshold) ?
      options.threshold : DEFAULT_MIN_THRESHOLD;
  }

  /**
   * Event hook for the start of a gesture. Initialized the lastEmitted
   * gesture and stores it in the first input for reference events.
   * @param {Array} inputs
   */
  start(inputs, state, element) {
    if(!this.isValid(inputs, state, element)) {
      return null;
    }
    if (inputs.length === DEFAULT_INPUTS) {
      // Store the progress in the first input.
      const progress = inputs[0].getGestureProgress(this.type);
      progress.lastEmittedDistance = util.distanceBetweenTwoPoints(
        inputs[0].current.x,
        inputs[1].current.x,
        inputs[0].current.y,
        inputs[1].current.y);
    }
  }

  /**
   * Event hook for the move of a gesture.
   *  Determines if the two points are moved in the expected direction relative
   *  to the current distance and the last distance.
   * @param {Array} inputs - The array of Inputs on the screen.
   * @param {Object} state - The state object of the current region.
   * @param {Element} element - The element associated to the binding.
   * @return {Object | null} - Returns the distance in pixels between two inputs
   */
  move(inputs, state, element) {
    if (state.numActiveInputs() === DEFAULT_INPUTS) {
      const currentDistance = util.distanceBetweenTwoPoints(
        inputs[0].current.x,
        inputs[1].current.x,
        inputs[0].current.y,
        inputs[1].current.y);
      const centerPoint = util.getMidpoint(
        inputs[0].current.x,
        inputs[1].current.x,
        inputs[0].current.y,
        inputs[1].current.y);

      // Progress is stored in the first input.
      const progress = inputs[0].getGestureProgress(this.type);
      const change = currentDistance - progress.lastEmittedDistance;

      if (Math.abs(change) >= this.threshold) {
        progress.lastEmittedDistance = currentDistance;
        return {
          distance: currentDistance,
          center: centerPoint,
          change: change,
        };
      }
    }

    return null;
  }
}

export default Pinch;
