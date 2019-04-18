/**
 * @file main.js
 * Main file to setup event listeners on the document,
 * and to expose the ZingTouch object
 */

import ZingTouch from './../ZingTouch.js';

if (typeof window !== 'undefined') {
  window.ZingTouch = ZingTouch;
}

export default ZingTouch;
