/**
 * @file util.js
 * Various accessor and mutator functions to handle state and validation.
 */

const CIRCLE_DEGREES = 360;
const HALF_CIRCLE_DEGREES = 180;

/**
 *  Contains generic helper functions
 * @type {Object}
 * @namespace util
 */
let util = {

  /**
   * Normalizes window events to be either of type start, move, or end.
   * @param {String} type - The event type emitted by the browser
   * @return {null|String} - The normalized event, or null if it is an
   * event not predetermined.
   */
  normalizeEvent: Object.freeze({
      mousedown:   'start',
      touchstart:  'start',
      pointerdown: 'start',

      mousemove:   'move',
      touchmove:   'move',
      pointermove: 'move',

      mouseup:   'end',
      touchend:  'end',
      pointerup: 'end',
  }),
  /* normalizeEvent*/

  /**
   * Determines if the current and previous coordinates are within or
   * up to a certain tolerance.
   * @param {Number} currentX - Current event's x coordinate
   * @param {Number} currentY - Current event's y coordinate
   * @param {Number} previousX - Previous event's x coordinate
   * @param {Number} previousY - Previous event's y coordinate
   * @param {Number} tolerance - The tolerance in pixel value.
   * @return {boolean} - true if the current coordinates are
   * within the tolerance, false otherwise
   */
  isWithin(currentX, currentY, previousX, previousY, tolerance) {
    return ((Math.abs(currentY - previousY) <= tolerance) &&
    (Math.abs(currentX - previousX) <= tolerance));
  },
  /* isWithin*/

  /**
   * Calculates the distance between two points.
   * @param {Number} x0
   * @param {Number} x1
   * @param {Number} y0
   * @param {Number} y1
   * @return {number} The numerical value between two points
   */
  distanceBetweenTwoPoints(x0, x1, y0, y1) {
    let dist = (Math.sqrt(((x1 - x0) * (x1 - x0)) + ((y1 - y0) * (y1 - y0))));
    return Math.round(dist * 100) / 100;
  },

  /**
   * Calculates the midpoint coordinates between two points.
   * @param {Number} x0
   * @param {Number} x1
   * @param {Number} y0
   * @param {Number} y1
   * @return {Object} The coordinates of the midpoint.
   */
  getMidpoint(x0, x1, y0, y1) {
    return {
      x: ((x0 + x1) / 2),
      y: ((y0 + y1) / 2),
    };
  },
  /**
   * Calculates the angle between the projection and an origin point.
   *   |                (projectionX,projectionY)
   *   |             /°
   *   |          /
   *   |       /
   *   |    / θ
   *   | /__________
   *   ° (originX, originY)
   * @param {number} originX
   * @param {number} originY
   * @param {number} projectionX
   * @param {number} projectionY
   * @return {number} - Degree along the unit circle where the project lies
   */
  getAngle(originX, originY, projectionX, projectionY) {
    let angle = Math.atan2(projectionY - originY, projectionX - originX) *
      ((HALF_CIRCLE_DEGREES) / Math.PI);
    return CIRCLE_DEGREES - ((angle < 0) ? (CIRCLE_DEGREES + angle) : angle);
  },
  /**
   * Calculates the angular distance in degrees between two angles
   *  along the unit circle
   * @param {number} start - The starting point in degrees
   * @param {number} end - The ending point in degrees
   * @return {number} The number of degrees between the
   * starting point and ending point. Negative degrees denote a clockwise
   * direction, and positive a counter-clockwise direction.
   */
  getAngularDistance(start, end) {
    let angle = (end - start) % CIRCLE_DEGREES;
    let sign = (angle < 0) ? 1 : -1;
    angle = Math.abs(angle);
    return (angle > HALF_CIRCLE_DEGREES) ?
    sign * (CIRCLE_DEGREES - angle) : sign * angle;
  },

  /**
   * Calculates the velocity of pixel/milliseconds between two points
   * @param {Number} startX
   * @param {Number} startY
   * @param {Number} startTime
   * @param {Number} endX
   * @param {Number} endY
   * @param {Number} endTime
   * @return {Number} velocity of px/time
   */
  getVelocity(startX, startY, startTime, endX, endY, endTime) {
    let distance = this.distanceBetweenTwoPoints(startX, endX, startY, endY);
    return (distance / (endTime - startTime));
  },

  /**
   * Returns the farthest right input
   * @param {Array} inputs
   * @return {Object}
   */
  getRightMostInput(inputs) {
    let rightMost = null;
    let distance = Number.MIN_VALUE;
    inputs.forEach((input) => {
      if (input.initial.x > distance) {
        rightMost = input;
      }
    });
    return rightMost;
  },

  /**
   * Determines is the value is an integer and not a floating point
   * @param {Mixed} value
   * @return {boolean}
   */
  isInteger(value) {
    return (typeof value === 'number') && (value % 1 === 0);
  },

  /**
   * Determines if the x,y position of the input is within then target.
   * @param {Number} x -clientX
   * @param {Number} y -clientY
   * @param {Element} target
   * @return {Boolean}
   */
  isInside(x, y, target) {
    const rect = target.getBoundingClientRect();
    return ((x > rect.left && x < rect.left + rect.width) &&
    (y > rect.top && y < rect.top + rect.height));
  },
  /**
   * Polyfill for event.propagationPath
   * @param {Event} event
   * @return {Array}
   */
  getPropagationPath(event) {
    if (event.path) {
      return event.path;
    } else {
      let path = [];
      let node = event.target;
      while (node != document) {
        path.push(node);
        node = node.parentNode;
      }

      return path;
    }
  },

  /**
   * Retrieve the index inside the path array
   * @param {Array} path
   * @param {Element} element
   * @return {Element}
   */
  getPathIndex(path, element) {
    let index = path.length;

    path.forEach((obj, i) => {
      if (obj === element) {
        index = i;
      }
    });

    return index;
  },

  setMSPreventDefault(element) {
    element.style['-ms-content-zooming'] = 'none';
    element.style['touch-action'] = 'none';
  },

  removeMSPreventDefault(element) {
    element.style['-ms-content-zooming'] = '';
    element.style['touch-action'] = '';
  },

  preventDefault(event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  }
};

export default util;
