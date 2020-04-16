/**
 * @file Rotate.js
 * Contains the Rotate class
 */

import Gesture from './Gesture.js';
import util from './../core/util.js';

const DEFAULT_INPUTS = 2;

/**
 * A Rotate is defined as two inputs moving about a circle,
 * maintaining a relatively equal radius.
 * @class Rotate
 */
class Rotate extends Gesture {
  /**
   * Constructor function for the Rotate class.
   */
  constructor(options = {}) {
    super();

    /**
     * The type of the Gesture.
     * @type {String}
     */
    this.type = 'rotate';

    /**
     * The number of touches required to emit Rotate events.
     * @type {Number}
     */
    this.numInputs = options.numInputs || DEFAULT_INPUTS;

    /**
     * The on move callback
     */
    if (options && options.onMove && typeof options.onMove === 'function') {
      this.onMove = options.onMove
    }
  }

  /**
   * move() - Event hook for the move of a gesture. Obtains the midpoint of two
   * the two inputs and calculates the projection of the right most input along
   * a unit circle to obtain an angle. This angle is compared to the previously
   * calculated angle to output the change of distance, and is compared to the
   * initial angle to output the distance from the initial angle to the current
   * angle.
   * @param {Array} inputs - The array of Inputs on the screen
   * @param {Object} state - The state object of the current listener.
   * @param {Element} element - The element associated to the binding.
   * @return {null} - null if this event did not occur
   * @return {Object} obj.angle - The current angle along the unit circle
   * @return {Object} obj.distanceFromOrigin - The angular distance travelled
   * from the initial right most point.
   * @return {Object} obj.distanceFromLast - The change of angle between the
   * last position and the current position.
   */
  move(inputs, state, element) {
    const numActiveInputs = state.numActiveInputs();
    if (this.numInputs !== numActiveInputs) return null;

    let currentPivot, initialPivot;
    let input;
    if (numActiveInputs === 1) {
      const bRect = element.getBoundingClientRect();
      currentPivot = {
        x: bRect.left + bRect.width / 2,
        y: bRect.top + bRect.height / 2,
      };
      initialPivot = currentPivot;
      input = inputs[0];
    } else {
      currentPivot = util.getMidpoint(
        inputs[0].current.x,
        inputs[1].current.x,
        inputs[0].current.y,
        inputs[1].current.y);
      input = util.getRightMostInput(inputs);
    }

    // Translate the current pivot point.
    const currentAngle = util.getAngle(
      currentPivot.x,
      currentPivot.y,
      input.current.x,
      input.current.y);

    const progress = input.getGestureProgress(this.getId());
    if (!progress.initialAngle) {
      progress.initialAngle = progress.previousAngle = currentAngle;
      progress.distance = progress.change = 0;
    } else {
      progress.change = util.getAngularDistance(
        progress.previousAngle,
        currentAngle);
      progress.distance = progress.distance + progress.change;
    }

    progress.previousAngle = currentAngle;
    const rotate = {
      angle: currentAngle,
      distanceFromOrigin: progress.distance,
      distanceFromLast: progress.change,
    };
    if(this.onMove) {
      this.onMove(inputs, state, element, rotate);
    }
    return rotate;
  }

  /* move*/
}

export default Rotate;
