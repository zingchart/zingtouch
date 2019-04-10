/**
 * @file ZingTouch.js
 * Main object containing API methods and Gesture constructors
 */

import Region from './core/classes/Region.js';
import Gesture from './gestures/Gesture.js';
import Pan from './gestures/Pan.js';
import Distance from './gestures/Distance.js';
import Rotate from './gestures/Rotate.js';
import Swipe from './gestures/Swipe.js';
import Tap from './gestures/Tap.js';

/**
 * The global API interface for ZingTouch. Contains a constructor for the
 * Region Object, and constructors for each predefined Gesture.
 * @type {Object}
 * @namespace ZingTouch
 */
let ZingTouch = {
  _regions: [],

  // Constructors
  Gesture,
  Pan,
  Distance,
  Rotate,
  Swipe,
  Tap,
  Region: function(element, capture, preventDefault) {
    let id = ZingTouch._regions.length;
    let region = new Region(element, capture, preventDefault, id);
    ZingTouch._regions.push(region);
    return region;
  },
};

export default ZingTouch;
