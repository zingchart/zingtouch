/**
 * @file Rotate.js
 * Contains the Rotate class
 */

import Gesture from './Gesture.js';
import util from './../core/util.js';

const MAX_INPUTS = 2;
const DEFAULT_MIN = 1;
/**
 * A Rotate is defined as two inputs moving about a circle,
 * maintaining a relatively equal radius.
 * @class Rotate
 */
class Rotate extends Gesture {
  /**
   * Constructor function for the Rotate class.
   * @param {Object} [options] - The options object.
   * @param {Number} [options.minInputs=1] - The minimum number of inputs needed
   */
  constructor(options) {
    super();

    /**
     * The type of the Gesture.
     * @type {String}
     */
    this.type = 'rotate';

    /**
     * The minimum number of inputs to detect a rotation
     */
    this.minInputs = (options && options.minInputs) ?
      options.minInputs : DEFAULT_MIN;

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
    if (state.numActiveInputs() <= MAX_INPUTS && state.numActiveInputs() >= this.minInputs) {
      let referencePivot;
      let diffX;
      let diffY;
      let input;
      if (state.numActiveInputs() === 1) {
        let bRect = element.getBoundingClientRect();
        referencePivot = {
          x: bRect.left + bRect.width / 2,
          y: bRect.top + bRect.height / 2,
        };
        input = inputs[0];
        diffX = diffY = 0;
      } else {
        referencePivot = util.getMidpoint(
          inputs[0].initial.x,
          inputs[1].initial.x,
          inputs[0].initial.y,
          inputs[1].initial.y);
        let currentPivot = util.getMidpoint(
          inputs[0].current.x,
          inputs[1].current.x,
          inputs[0].current.y,
          inputs[1].current.y);
        diffX = referencePivot.x - currentPivot.x;
        diffY = referencePivot.y - currentPivot.y;
        input = util.getRightMostInput(inputs);
      }

      // Translate the current pivot point.
      let currentAngle = util.getAngle(referencePivot.x, referencePivot.y,
        input.current.x + diffX, input.current.y + diffY);

      let progress = input.getGestureProgress(this.getId());
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

      return {
        angle: currentAngle,
        distanceFromOrigin: progress.distance,
        distanceFromLast: progress.change,
      };
    }

    return null;
  }

  /* move*/
}

export default Rotate;
