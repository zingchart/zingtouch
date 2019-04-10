/**
 * @file Swipe.js
 * Contains the Swipe class
 */

import Gesture from './Gesture.js';
import util from './../core/util.js';

const DEFAULT_INPUTS = 1;
const DEFAULT_MAX_REST_TIME = 100;
const DEFAULT_ESCAPE_VELOCITY = 0.2;
const DEFAULT_TIME_DISTORTION = 100;
const DEFAULT_MAX_PROGRESS_STACK = 10;

/**
 * A swipe is defined as input(s) moving in the same direction in an relatively
 * increasing velocity and leaving the screen at some point before it drops
 * below it's escape velocity.
 * @class Swipe
 */
class Swipe extends Gesture {

  /**
   * Constructor function for the Swipe class.
   * @param {Object} [options] - The options object.
   * @param {Number} [options.numInputs] - The number of inputs to trigger a
   * Swipe can be variable, and the maximum number being a factor of the browser
   *  move and current move events.
   * @param {Number} [options.maxRestTime] - The maximum resting time a point
   *  has between it's last
   * @param {Number} [options.escapeVelocity] - The minimum velocity the input
   *  has to be at to emit a swipe.
   * @param {Number} [options.timeDistortion] - (EXPERIMENTAL) A value of time
   *  in milliseconds to distort between events.
   * @param {Number} [options.maxProgressStack] - (EXPERIMENTAL)The maximum
   *  amount of move events to keep
   * track of for a swipe.
   */
  constructor(options) {
    super();
    /**
     * The type of the Gesture
     * @type {String}
     */
    this.type = 'swipe';

    /**
     * The number of inputs to trigger a Swipe can be variable,
     * and the maximum number being a factor of the browser.
     * @type {Number}
     */
    this.numInputs = (options && options.numInputs) ?
      options.numInputs : DEFAULT_INPUTS;

    /**
     * The maximum resting time a point has between it's last move and
     * current move events.
     * @type {Number}
     */
    this.maxRestTime = (options && options.maxRestTime) ?
      options.maxRestTime : DEFAULT_MAX_REST_TIME;

    /**
     * The minimum velocity the input has to be at to emit a swipe.
     * This is useful for determining the difference between
     * a swipe and a pan gesture.
     * @type {number}
     */
    this.escapeVelocity = (options && options.escapeVelocity) ?
      options.escapeVelocity : DEFAULT_ESCAPE_VELOCITY;

    /**
     * (EXPERIMENTAL) A value of time in milliseconds to distort between events.
     * Browsers do not accurately measure time with the Date constructor in
     * milliseconds, so consecutive events sometimes display the same timestamp
     * but different x/y coordinates. This will distort a previous time
     * in such cases by the timeDistortion's value.
     * @type {number}
     */
    this.timeDistortion = (options && options.timeDistortion) ?
      options.timeDistortion : DEFAULT_TIME_DISTORTION;

    /**
     * (EXPERIMENTAL) The maximum amount of move events to keep track of for a
     * swipe. This helps give a more accurate estimate of the user's velocity.
     * @type {number}
     */
    this.maxProgressStack = (options && options.maxProgressStack) ?
      options.maxProgressStack : DEFAULT_MAX_PROGRESS_STACK;
  }

  /**
   * Event hook for the move of a gesture. Captures an input's x/y coordinates
   * and the time of it's event on a stack.
   * @param {Array} inputs - The array of Inputs on the screen.
   * @param {Object} state - The state object of the current region.
   * @param {Element} element - The element associated to the binding.
   * @return {null} - Swipe does not emit from a move.
   */
  move(inputs, state, element) {
    if (this.numInputs === inputs.length) {
      for (let i = 0; i < inputs.length; i++) {
        let progress = inputs[i].getGestureProgress(this.getId());
        if (!progress.moves) {
          progress.moves = [];
        }

        progress.moves.push({
          time: new Date().getTime(),
          x: inputs[i].current.x,
          y: inputs[i].current.y,
        });

        if (progress.length > this.maxProgressStack) {
          progress.moves.shift();
        }
      }
    }

    return null;
  }

  /* move*/

  /**
   * Determines if the input's history validates a swipe motion.
   * Determines if it did not come to a complete stop (maxRestTime), and if it
   * had enough of a velocity to be considered (ESCAPE_VELOCITY).
   * @param {Array} inputs - The array of Inputs on the screen
   * @return {null|Object} - null if the gesture is not to be emitted,
   *  Object with information otherwise.
   */
  end(inputs) {
    if (this.numInputs === inputs.length) {
      let output = {
        data: [],
      };

      for (var i = 0; i < inputs.length; i++) {
        // Determine if all input events are on the 'end' event.
        if (inputs[i].current.type !== 'end') {
          return;
        }

        let progress = inputs[i].getGestureProgress(this.getId());
        if (progress.moves && progress.moves.length > 2) {
          // CHECK : Return if the input has not moved in maxRestTime ms.

          let currentMove = progress.moves.pop();
          if ((new Date().getTime()) - currentMove.time > this.maxRestTime) {
            return null;
          }

          let lastMove;
          let index = progress.moves.length - 1;

          /* Date is unreliable, so we retrieve the last move event where
           the time is not the same. */
          while (index !== -1) {
            if (progress.moves[index].time !== currentMove.time) {
              lastMove = progress.moves[index];
              break;
            }

            index--;
          }

          /* If the date is REALLY unreliable, we apply a time distortion
           to the last event.
           */
          if (!lastMove) {
            lastMove = progress.moves.pop();
            lastMove.time += this.timeDistortion;
          }

          var velocity = util.getVelocity(lastMove.x, lastMove.y, lastMove.time,
            currentMove.x, currentMove.y, currentMove.time);

          output.data[i] = {
            velocity: velocity,
            distance: util.distanceBetweenTwoPoints(lastMove.x, currentMove.x, lastMove.y, currentMove.y),
            duration:  currentMove.time - lastMove.time,
            currentDirection: util.getAngle(
              lastMove.x,
              lastMove.y,
              currentMove.x,
              currentMove.y),
          };
        }
      }

      for (var i = 0; i < output.data.length; i++) {
        if (velocity < this.escapeVelocity) {
          return null;
        }
      }

      if (output.data.length > 0) {
        return output;
      }
    }

    return null;
  }

  /* end*/
}

export default Swipe;
