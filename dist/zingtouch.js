/*!
 * 
 *   ZingTouch v2.0.0
 *   Author: ZingChart http://zingchart.com
 *   License: MIT
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/core/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ZingTouch.js":
/*!**************************!*\
  !*** ./src/ZingTouch.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_classes_Region_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/classes/Region.js */ "./src/core/classes/Region.js");
/* harmony import */ var _gestures_Gesture_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gestures/Gesture.js */ "./src/gestures/Gesture.js");
/* harmony import */ var _gestures_Pan_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gestures/Pan.js */ "./src/gestures/Pan.js");
/* harmony import */ var _gestures_Distance_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gestures/Distance.js */ "./src/gestures/Distance.js");
/* harmony import */ var _gestures_Rotate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gestures/Rotate.js */ "./src/gestures/Rotate.js");
/* harmony import */ var _gestures_Swipe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gestures/Swipe.js */ "./src/gestures/Swipe.js");
/* harmony import */ var _gestures_Tap_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gestures/Tap.js */ "./src/gestures/Tap.js");
/**
 * @file ZingTouch.js
 * Main object containing API methods and Gesture constructors
 */







/**
 * The global API interface for ZingTouch. Contains a constructor for the
 * Region Object, and constructors for each predefined Gesture.
 * @type {Object}
 * @namespace ZingTouch
 */

var ZingTouch = {
  _regions: [],
  // Constructors
  Gesture: _gestures_Gesture_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  Pan: _gestures_Pan_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  Distance: _gestures_Distance_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  Rotate: _gestures_Rotate_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  Swipe: _gestures_Swipe_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  Tap: _gestures_Tap_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  Region: function Region(element, capture, preventDefault) {
    var id = ZingTouch._regions.length;
    var region = new _core_classes_Region_js__WEBPACK_IMPORTED_MODULE_0__["default"](element, capture, preventDefault, id);

    ZingTouch._regions.push(region);

    return region;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ZingTouch);

/***/ }),

/***/ "./src/core/arbiter.js":
/*!*****************************!*\
  !*** ./src/core/arbiter.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dispatcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispatcher.js */ "./src/core/dispatcher.js");
/* harmony import */ var _interpreter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interpreter.js */ "./src/core/interpreter.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util.js */ "./src/core/util.js");
/**
 * @file arbiter.js
 * Contains logic for the dispatcher
 */



/**
 * Function that handles event flow, negotiating with the interpreter,
 * and dispatcher.
 * 1. Receiving all touch events in the window.
 * 2. Determining which gestures are linked to the target element.
 * 3. Negotiating with the Interpreter what event should occur.
 * 4. Sending events to the dispatcher to emit events to the target.
 * @param {Event} event - The event emitted from the window object.
 * @param {Object} region - The region object of the current listener.
 */

function arbiter(event, region) {
  var state = region.state;
  var eventType = _util_js__WEBPACK_IMPORTED_MODULE_2__["default"].normalizeEvent[event.type];
  /*
   Return if a gesture is not in progress and won't be. Also catches the case
   where a previous event is in a partial state (2 finger pan, waits for both
   inputs to reach touchend)
   */

  if (state.inputs.length === 0 && eventType !== 'start') {
    return;
  }
  /*
   Check for 'stale' or events that lost focus
   (e.g. a pan goes off screen/off region.)
   Does not affect mobile devices.
   */


  if (typeof event.buttons !== 'undefined' && eventType !== 'end' && event.buttons === 0) {
    state.resetInputs();
    return;
  } // Update the state with the new events. If the event is stopped, return;


  if (!state.updateInputs(event, region.element)) {
    return;
  } // Retrieve the initial target from any one of the inputs


  var bindings = state.retrieveBindingsByInitialPos();

  if (bindings.length > 0) {
    if (region.preventDefault) {
      _util_js__WEBPACK_IMPORTED_MODULE_2__["default"].setMSPreventDefault(region.element);
      _util_js__WEBPACK_IMPORTED_MODULE_2__["default"].preventDefault(event);
    } else {
      _util_js__WEBPACK_IMPORTED_MODULE_2__["default"].removeMSPreventDefault(region.element);
    }

    var toBeDispatched = {};
    var gestures = Object(_interpreter_js__WEBPACK_IMPORTED_MODULE_1__["default"])(bindings, event, state);
    /* Determine the deepest path index to emit the event
     from, to avoid duplicate events being fired. */

    var path = _util_js__WEBPACK_IMPORTED_MODULE_2__["default"].getPropagationPath(event);
    gestures.forEach(function (gesture) {
      var id = gesture.binding.gesture.getId();

      if (toBeDispatched[id]) {
        if (_util_js__WEBPACK_IMPORTED_MODULE_2__["default"].getPathIndex(path, gesture.binding.element) < _util_js__WEBPACK_IMPORTED_MODULE_2__["default"].getPathIndex(path, toBeDispatched[id].binding.element)) {
          toBeDispatched[id] = gesture;
        }
      } else {
        toBeDispatched[id] = gesture;
      }
    });
    Object.keys(toBeDispatched).forEach(function (index) {
      var gesture = toBeDispatched[index];
      Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_0__["default"])(gesture.binding, gesture.data, gesture.events);
    });
  }

  var endCount = 0;
  state.inputs.forEach(function (input) {
    if (input.getCurrentEventType() === 'end') {
      endCount++;
    }
  });

  if (endCount === state.inputs.length) {
    state.resetInputs();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (arbiter);

/***/ }),

/***/ "./src/core/classes/Binder.js":
/*!************************************!*\
  !*** ./src/core/classes/Binder.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @file Binder.js
 */

/**
 * A chainable object that contains a single element to be bound upon.
 * Called from ZingTouch.bind(), and is used to chain over gesture callbacks.
 * @class
 */
var Binder =
/**
 * Constructor function for the Binder class.
 * @param {Element} element - The element to bind gestures to.
 * @param {Boolean} bindOnce - Option to bind once and only emit
 * the event once.
 * @param {Object} state - The state of the Region that is being bound to.
 * @return {Object} - Returns 'this' to be chained over and over again.
 */
function Binder(element, bindOnce, state) {
  var _this = this;

  _classCallCheck(this, Binder);

  /**
   * The element to bind gestures to.
   * @type {Element}
   */
  this.element = element;
  Object.keys(state.registeredGestures).forEach(function (key) {
    _this[key] = function (handler, capture) {
      state.addBinding(_this.element, key, handler, capture, bindOnce);
      return _this;
    };
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Binder);

/***/ }),

/***/ "./src/core/classes/Binding.js":
/*!*************************************!*\
  !*** ./src/core/classes/Binding.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @file Binding.js
 */

/**
 * Responsible for creating a binding between an element and a gesture.
 * @class Binding
 */
var Binding =
/**
 * Constructor function for the Binding class.
 * @param {Element} element - The element to associate the gesture to.
 * @param {Gesture} gesture - A instance of the Gesture type.
 * @param {Function} handler - The function handler to execute when a
 * gesture is recognized
 * on the associated element.
 * @param {Boolean} [capture=false] - A boolean signifying if the event is
 * to be emitted during
 * the capture or bubble phase.
 * @param {Boolean} [bindOnce=false] - A boolean flag
 * used for the bindOnce syntax.
 */
function Binding(element, gesture, handler, capture, bindOnce) {
  _classCallCheck(this, Binding);

  /**
   * The element to associate the gesture to.
   * @type {Element}
   */
  this.element = element;
  /**
   * A instance of the Gesture type.
   * @type {Gesture}
   */

  this.gesture = gesture;
  /**
   * The function handler to execute when a gesture is
   * recognized on the associated element.
   * @type {Function}
   */

  this.handler = handler;
  /**
   * A boolean signifying if the event is to be
   * emitted during the capture or bubble phase.
   * @type {Boolean}
   */

  this.capture = typeof capture !== 'undefined' ? capture : false;
  /**
   * A boolean flag used for the bindOnce syntax.
   * @type {Boolean}
   */

  this.bindOnce = typeof bindOnce !== 'undefined' ? bindOnce : false;
};

/* harmony default export */ __webpack_exports__["default"] = (Binding);

/***/ }),

/***/ "./src/core/classes/Input.js":
/*!***********************************!*\
  !*** ./src/core/classes/Input.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ZingEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ZingEvent.js */ "./src/core/classes/ZingEvent.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @file Input.js
 */

/**
 * Tracks a single input and contains information about the
 * current, previous, and initial events.
 * Contains the progress of each Input and it's associated gestures.
 * @class Input
 */

var Input =
/*#__PURE__*/
function () {
  /**
   * Constructor function for the Input class.
   * @param {Event} event - The Event object from the window
   * @param {Number} [identifier=0] - The identifier for each input event
   * (taken from event.changedTouches)
   */
  function Input(event, identifier) {
    _classCallCheck(this, Input);

    var currentEvent = new _ZingEvent_js__WEBPACK_IMPORTED_MODULE_0__["default"](event, identifier);
    /**
     * Holds the initial event object. A touchstart/mousedown event.
     * @type {ZingEvent}
     */

    this.initial = currentEvent;
    /**
     * Holds the most current event for this Input, disregarding any other past,
     * current, and future events that other Inputs participate in.
     * e.g. This event ended in an 'end' event, but another Input is still
     * participating in events -- this will not be updated in such cases.
     * @type {ZingEvent}
     */

    this.current = currentEvent;
    /**
     * Holds the previous event that took place.
     * @type {ZingEvent}
     */

    this.previous = currentEvent;
    /**
     * Refers to the event.touches index, or 0 if a simple mouse event occurred.
     * @type {Number}
     */

    this.identifier = typeof identifier !== 'undefined' ? identifier : 0;
    /**
     * Stores internal state between events for
     * each gesture based off of the gesture's id.
     * @type {Object}
     */

    this.progress = {};
  }
  /**
   * Receives an input, updates the internal state of what the input has done.
   * @param {Event} event - The event object to wrap with a ZingEvent.
   * @param {Number} touchIdentifier - The index of inputs, from event.touches
   */


  _createClass(Input, [{
    key: "update",
    value: function update(event, touchIdentifier) {
      this.previous = this.current;
      this.current = new _ZingEvent_js__WEBPACK_IMPORTED_MODULE_0__["default"](event, touchIdentifier);
    }
    /**
     * Returns the progress of the specified gesture.
     * @param {String} id - The identifier for each unique Gesture's progress.
     * @return {Object} - The progress of the gesture.
     * Creates an empty object if no progress has begun.
     */

  }, {
    key: "getGestureProgress",
    value: function getGestureProgress(id) {
      if (!this.progress[id]) {
        this.progress[id] = {};
      }

      return this.progress[id];
    }
    /**
     * Returns the normalized current Event's type.
     * @return {String} The current event's type ( start | move | end )
     */

  }, {
    key: "getCurrentEventType",
    value: function getCurrentEventType() {
      return this.current.type;
    }
    /**
     * Resets a progress/state object of the specified gesture.
     * @param {String} id - The identifier of the specified gesture
     */

  }, {
    key: "resetProgress",
    value: function resetProgress(id) {
      this.progress[id] = {};
    }
  }]);

  return Input;
}();

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./src/core/classes/Region.js":
/*!************************************!*\
  !*** ./src/core/classes/Region.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Binder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Binder.js */ "./src/core/classes/Binder.js");
/* harmony import */ var _gestures_Gesture_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../gestures/Gesture.js */ "./src/gestures/Gesture.js");
/* harmony import */ var _arbiter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../arbiter.js */ "./src/core/arbiter.js");
/* harmony import */ var _State_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./State.js */ "./src/core/classes/State.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @file Region.js
 */




/**
 * Allows the user to specify a region to capture all events to feed ZingTouch
 * into. This can be as narrow as the element itself, or as big as the document
 * itself. The more specific an area, the better performant the overall
 * application will perform. Contains API methods to bind/unbind specific
 * elements to corresponding gestures. Also contains the ability to
 * register/unregister new gestures.
 * @class Region
 */

var Region =
/*#__PURE__*/
function () {
  /**
   * Constructor function for the Region class.
   * @param {Element} element - The element to capture all
   *  window events in that region to feed into ZingTouch.
   * @param {boolean} [capture=false] - Whether the region listens for
   *  captures or bubbles.
   * @param {boolean} [preventDefault=true] - Whether the default browser
   *  functionality should be disabled;
   * @param {Number} id - The id of the region, assigned by the ZingTouch object
   */
  function Region(element, capture, preventDefault, id) {
    var _this = this;

    _classCallCheck(this, Region);

    /**
     * The identifier for the Region. This is assigned by the ZingTouch object
     * and is used to hash gesture id for uniqueness.
     * @type {Number}
     */
    this.id = id;
    /**
     * The element being bound to.
     * @type {Element}
     */

    this.element = element;
    /**
     * Whether the region listens for captures or bubbles.
     * @type {boolean}
     */

    this.capture = typeof capture !== 'undefined' ? capture : false;
    /**
     * Boolean to disable browser functionality such as scrolling and zooming
     * over the region
     * @type {boolean}
     */

    this.preventDefault = typeof preventDefault !== 'undefined' ? preventDefault : true;
    /**
     * The internal state object for a Region.
     * Keeps track of registered gestures, inputs, and events.
     * @type {State}
     */

    this.state = new _State_js__WEBPACK_IMPORTED_MODULE_3__["default"](id);
    var eventNames = [];

    if (window.PointerEvent && !window.TouchEvent) {
      eventNames = ['pointerdown', 'pointermove', 'pointerup'];
    } else {
      eventNames = ['mousedown', 'mousemove', 'mouseup', 'touchstart', 'touchmove', 'touchend'];
    } // Bind detected browser events to the region element.


    eventNames.forEach(function (name) {
      element.addEventListener(name, function (e) {
        Object(_arbiter_js__WEBPACK_IMPORTED_MODULE_2__["default"])(e, _this);
      }, _this.capture);
    });
  }
  /**
   * Bind an element to a registered/unregistered gesture with
   * multiple function signatures.
   * @example
   * bind(element) - chainable
   * @example
   * bind(element, gesture, handler, [capture])
   * @param {Element} element - The element object.
   * @param {String|Object} [gesture] - Gesture key, or a Gesture object.
   * @param {Function} [handler] - The function to execute when an event is
   *  emitted.
   * @param {Boolean} [capture] - capture/bubble
   * @param {Boolean} [bindOnce = false] - Option to bind once and
   *  only emit the event once.
   * @return {Object} - a chainable object that has the same function as bind.
   */


  _createClass(Region, [{
    key: "bind",
    value: function bind(element, gesture, handler, capture, bindOnce) {
      if (!element || element && !element.tagName) {
        throw 'Bind must contain an element';
      }

      bindOnce = typeof bindOnce !== 'undefined' ? bindOnce : false;

      if (!gesture) {
        return new _Binder_js__WEBPACK_IMPORTED_MODULE_0__["default"](element, bindOnce, this.state);
      } else {
        this.state.addBinding(element, gesture, handler, capture, bindOnce);
      }
    }
    /**
     * Bind an element and sets up actions to remove the binding once
     * it has been emitted for the first time.
     * 1. bind(element) - chainable
     * 2. bind(element, gesture, handler, [capture])
     * @param {Element} element - The element object.
     * @param {String|Object} gesture - Gesture key, or a Gesture object.
     * @param {Function} handler - The function to execute when an
     *  event is emitted.
     * @param {Boolean} capture - capture/bubble
     * @return {Object} - a chainable object that has the same function as bind.
     */

  }, {
    key: "bindOnce",
    value: function bindOnce(element, gesture, handler, capture) {
      this.bind(element, gesture, handler, capture, true);
    }
    /**
     * Unbinds an element from either the specified gesture
     *  or all if no element is specified.
     * @param {Element} element -The element to remove.
     * @param {String | Object} [gesture] - A String representing the gesture,
     *   or the actual object being used.
     * @return {Array} - An array of Bindings that were unbound to the element;
     */

  }, {
    key: "unbind",
    value: function unbind(element, gesture) {
      var _this2 = this;

      var bindings = this.state.retrieveBindingsByElement(element);
      var unbound = [];
      bindings.forEach(function (binding) {
        if (gesture) {
          if (typeof gesture === 'string' && _this2.state.registeredGestures[gesture]) {
            var registeredGesture = _this2.state.registeredGestures[gesture];

            if (registeredGesture.id === binding.gesture.id) {
              element.removeEventListener(binding.gesture.getId(), binding.handler, binding.capture);
              unbound.push(binding);
            }
          }
        } else {
          element.removeEventListener(binding.gesture.getId(), binding.handler, binding.capture);
          unbound.push(binding);
        }
      });
      return unbound;
    }
    /* unbind*/

    /**
     * Registers a new gesture with an assigned key
     * @param {String} key - The key used to register an element to that gesture
     * @param {Gesture} gesture - A gesture object
     */

  }, {
    key: "register",
    value: function register(key, gesture) {
      if (typeof key !== 'string') {
        throw new Error('Parameter key is an invalid string');
      }

      if (!gesture instanceof _gestures_Gesture_js__WEBPACK_IMPORTED_MODULE_1__["default"]) {
        throw new Error('Parameter gesture is an invalid Gesture object');
      }

      gesture.setType(key);
      this.state.registerGesture(gesture, key);
    }
    /* register*/

    /**
     * Un-registers a gesture from the Region's state such that
     * it is no longer emittable.
     * Unbinds all events that were registered with the type.
     * @param {String|Object} key - Gesture key that was used to
     *  register the object
     * @return {Object} - The Gesture object that was unregistered
     *  or null if it could not be found.
     */

  }, {
    key: "unregister",
    value: function unregister(key) {
      this.state.bindings.forEach(function (binding) {
        if (binding.gesture.getType() === key) {
          binding.element.removeEventListener(binding.gesture.getId(), binding.handler, binding.capture);
        }
      });
      var registeredGesture = this.state.registeredGestures[key];
      delete this.state.registeredGestures[key];
      return registeredGesture;
    }
  }]);

  return Region;
}();

/* harmony default export */ __webpack_exports__["default"] = (Region);

/***/ }),

/***/ "./src/core/classes/State.js":
/*!***********************************!*\
  !*** ./src/core/classes/State.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gestures_Gesture_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../gestures/Gesture.js */ "./src/gestures/Gesture.js");
/* harmony import */ var _gestures_Pan_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../gestures/Pan.js */ "./src/gestures/Pan.js");
/* harmony import */ var _gestures_Distance_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../gestures/Distance.js */ "./src/gestures/Distance.js");
/* harmony import */ var _gestures_Rotate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../gestures/Rotate.js */ "./src/gestures/Rotate.js");
/* harmony import */ var _gestures_Swipe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../gestures/Swipe.js */ "./src/gestures/Swipe.js");
/* harmony import */ var _gestures_Tap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../gestures/Tap.js */ "./src/gestures/Tap.js");
/* harmony import */ var _Binding_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Binding.js */ "./src/core/classes/Binding.js");
/* harmony import */ var _Input_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Input.js */ "./src/core/classes/Input.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../util.js */ "./src/core/util.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @file State.js
 */









var DEFAULT_MOUSE_ID = 0;
/**
 * Creates an object related to a Region's state,
 * and contains helper methods to update and clean up different states.
 */

var State =
/*#__PURE__*/
function () {
  /**
   * Constructor for the State class.
   * @param {String} regionId - The id the region this state is bound to.
   */
  function State(regionId) {
    _classCallCheck(this, State);

    /**
     * The id for the region this state is bound to.
     * @type {String}
     */
    this.regionId = regionId;
    /**
     * An array of current and recently inactive
     *  Input objects related to a gesture.
     * @type {Input}
     */

    this.inputs = [];
    /**
     * An array of Binding objects; The list of relations between elements,
     *   their gestures, and the handlers.
     * @type {Binding}
     */

    this.bindings = [];
    /**
     * The number of gestures that have been registered with this state
     * @type {Number}
     */

    this.numGestures = 0;
    /**
     * A key/value map all the registered gestures for the listener.
     *  Note: Can only have one gesture registered to one key.
     * @type {Object}
     */

    this.registeredGestures = {};
    this.registerGesture(new _gestures_Pan_js__WEBPACK_IMPORTED_MODULE_1__["default"](), 'pan');
    this.registerGesture(new _gestures_Rotate_js__WEBPACK_IMPORTED_MODULE_3__["default"](), 'rotate');
    this.registerGesture(new _gestures_Distance_js__WEBPACK_IMPORTED_MODULE_2__["default"](), 'distance');
    this.registerGesture(new _gestures_Swipe_js__WEBPACK_IMPORTED_MODULE_4__["default"](), 'swipe');
    this.registerGesture(new _gestures_Tap_js__WEBPACK_IMPORTED_MODULE_5__["default"](), 'tap');
  }
  /**
   * Creates a new binding with the given element and gesture object.
   * If the gesture object provided is unregistered, it's reference
   * will be saved in as a binding to be later referenced.
   * @param  {Element} element - The element the gesture is bound to.
   * @param {String|Object} gesture  - Either a name of a registered gesture,
   *  or an unregistered  Gesture object.
   * @param {Function} handler - The function handler to be called
   *  when the event is emitted. Used to bind/unbind.
   * @param {Boolean} capture - Whether the gesture is to be
   *  detected in the capture of bubble phase. Used to bind/unbind.
   * @param {Boolean} bindOnce - Option to bind once and
   *  only emit the event once.
   */


  _createClass(State, [{
    key: "addBinding",
    value: function addBinding(element, gesture, handler, capture, bindOnce) {
      var boundGesture; // Error type checking.

      if (element && typeof element.tagName === 'undefined') {
        throw new Error('Parameter element is an invalid object.');
      }

      if (typeof handler !== 'function') {
        throw new Error('Parameter handler is invalid.');
      }

      if (typeof gesture === 'string' && Object.keys(this.registeredGestures).indexOf(gesture) === -1) {
        throw new Error('Parameter ' + gesture + ' is not a registered gesture');
      } else if (_typeof(gesture) === 'object' && !(gesture instanceof _gestures_Gesture_js__WEBPACK_IMPORTED_MODULE_0__["default"])) {
        throw new Error('Parameter for the gesture is not of a Gesture type');
      }

      if (typeof gesture === 'string') {
        boundGesture = this.registeredGestures[gesture];
      } else {
        boundGesture = gesture;

        if (boundGesture.id === '') {
          this.assignGestureId(boundGesture);
        }
      }

      this.bindings.push(new _Binding_js__WEBPACK_IMPORTED_MODULE_6__["default"](element, boundGesture, handler, capture, bindOnce));
      element.addEventListener(boundGesture.getId(), handler, capture);
    }
    /**
     * Retrieves the Binding by which an element is associated to.
     * @param {Element} element - The element to find bindings to.
     * @return {Array} - An array of Bindings to which that element is bound
     */

  }, {
    key: "retrieveBindingsByElement",
    value: function retrieveBindingsByElement(element) {
      return this.bindings.filter(function (b) {
        return b.element === element;
      });
    }
    /**
     * Retrieves all bindings based upon the initial X/Y position of the inputs.
     * e.g. if gesture started on the correct target element,
     *  but diverted away into the correct region, this would still be valid.
     * @return {Array} - An array of Bindings to which that element is bound
     */

  }, {
    key: "retrieveBindingsByInitialPos",
    value: function retrieveBindingsByInitialPos() {
      var _this = this;

      return this.bindings.filter(function (binding) {
        return _this.inputs.some(function (input) {
          return _util_js__WEBPACK_IMPORTED_MODULE_8__["default"].isInside(input.initial.x, input.initial.y, binding.element);
        });
      });
    }
    /**
     * Updates the inputs with new information based upon a new event being fired.
     * @param {Event} event - The event being captured.
     * @param {Element} regionElement - The element where
     *  this current Region is bound to.
     * @return {boolean} - returns true for a successful update,
     *  false if the event is invalid.
     */

  }, {
    key: "updateInputs",
    value: function updateInputs(event, regionElement) {
      var _this2 = this;

      var eventType = event.touches ? 'TouchEvent' : event.pointerType ? 'PointerEvent' : 'MouseEvent';

      switch (eventType) {
        case 'TouchEvent':
          Array.from(event.changedTouches).forEach(function (touch) {
            update(event, _this2, touch.identifier, regionElement);
          });
          break;

        case 'PointerEvent':
          update(event, this, event.pointerId, regionElement);
          break;

        case 'MouseEvent':
        default:
          update(event, this, DEFAULT_MOUSE_ID, regionElement);
          break;
      }

      return true;

      function update(event, state, identifier, regionElement) {
        var eventType = _util_js__WEBPACK_IMPORTED_MODULE_8__["default"].normalizeEvent[event.type];
        var input = findInputById(state.inputs, identifier); // A starting input was not cleaned up properly and still exists.

        if (eventType === 'start' && input) {
          state.resetInputs();
          return;
        } // An input has moved outside the region.


        if (eventType !== 'start' && input && !_util_js__WEBPACK_IMPORTED_MODULE_8__["default"].isInside(input.current.x, input.current.y, regionElement)) {
          state.resetInputs();
          return;
        }

        if (eventType !== 'start' && !input) {
          state.resetInputs();
          return;
        }

        if (eventType === 'start') {
          state.inputs.push(new _Input_js__WEBPACK_IMPORTED_MODULE_7__["default"](event, identifier));
        } else {
          input.update(event, identifier);
        }
      }
    }
    /**
     * Removes all inputs from the state, allowing for a new gesture.
     */

  }, {
    key: "resetInputs",
    value: function resetInputs() {
      this.inputs = [];
    }
    /**
     * Counts the number of active inputs at any given time.
     * @return {Number} - The number of active inputs.
     */

  }, {
    key: "numActiveInputs",
    value: function numActiveInputs() {
      var endType = this.inputs.filter(function (input) {
        return input.current.type !== 'end';
      });
      return endType.length;
    }
    /**
     * Register the gesture to the current region.
     * @param {Object} gesture - The gesture to register
     * @param {String} key - The key to define the new gesture as.
     */

  }, {
    key: "registerGesture",
    value: function registerGesture(gesture, key) {
      this.assignGestureId(gesture);
      this.registeredGestures[key] = gesture;
    }
    /**
     * Tracks the gesture to this state object to become uniquely identifiable.
     * Useful for nested Regions.
     * @param {Gesture} gesture - The gesture to track
     */

  }, {
    key: "assignGestureId",
    value: function assignGestureId(gesture) {
      gesture.setId(this.regionId + '-' + this.numGestures++);
    }
  }]);

  return State;
}();
/**
 * Searches through each input, comparing the browser's identifier key
 *  for touches, to the stored one in each input
 * @param {Array} inputs - The array of inputs in state.
 * @param {String} identifier - The identifier the browser has assigned.
 * @return {Input} - The input object with the corresponding identifier,
 *  null if it did not find any.
 */


function findInputById(inputs, identifier) {
  return inputs.find(function (i) {
    return i.identifier === identifier;
  });
}

/* harmony default export */ __webpack_exports__["default"] = (State);

/***/ }),

/***/ "./src/core/classes/ZingEvent.js":
/*!***************************************!*\
  !*** ./src/core/classes/ZingEvent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util.js */ "./src/core/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @file ZingEvent.js
 * Contains logic for ZingEvents
 */

var INITIAL_COORDINATE = 0;
/**
 * An event wrapper that normalizes events across browsers and input devices
 * @class ZingEvent
 */

var ZingEvent =
/**
 * @constructor
 * @param {Event} event - The event object being wrapped.
 * @param {Array} event.touches - The number of touches on
 *  a screen (mobile only).
 * @param {Object} event.changedTouches - The TouchList representing
 * points that participated in the event.
 * @param {Number} touchIdentifier - The index of touch if applicable
 */
function ZingEvent(event, touchIdentifier) {
  _classCallCheck(this, ZingEvent);

  /**
   * The original event object.
   * @type {Event}
   */
  this.originalEvent = event;
  /**
   * The type of event or null if it is an event not predetermined.
   * @see util.normalizeEvent
   * @type {String | null}
   */

  this.type = _util_js__WEBPACK_IMPORTED_MODULE_0__["default"].normalizeEvent[event.type];
  /**
   * The X coordinate for the event, based off of the client.
   * @type {number}
   */

  this.x = INITIAL_COORDINATE;
  /**
   * The Y coordinate for the event, based off of the client.
   * @type {number}
   */

  this.y = INITIAL_COORDINATE;
  var eventObj;

  if (event.touches && event.changedTouches) {
    eventObj = Array.from(event.changedTouches).find(function (t) {
      return t.identifier === touchIdentifier;
    });
  } else {
    eventObj = event;
  }

  this.x = this.clientX = eventObj.clientX;
  this.y = this.clientY = eventObj.clientY;
  this.pageX = eventObj.pageX;
  this.pageY = eventObj.pageY;
  this.screenX = eventObj.screenX;
  this.screenY = eventObj.screenY;
};

/* harmony default export */ __webpack_exports__["default"] = (ZingEvent);

/***/ }),

/***/ "./src/core/dispatcher.js":
/*!********************************!*\
  !*** ./src/core/dispatcher.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @file dispatcher.js
 * Contains logic for the dispatcher
 */

/**
 * Emits data at the target element if available, and bubbles up from
 * the target to the parent until the document has been reached.
 * Called from the arbiter.
 * @param {Binding} binding - An object of type Binding
 * @param {Object} data - The metadata computed by the gesture being emitted.
 * @param {Array} events - An array of ZingEvents
 *  corresponding to the inputs on the screen.
 */
function dispatcher(binding, data, events) {
  data.events = events;
  var newEvent = new CustomEvent(binding.gesture.getId(), {
    detail: data,
    bubbles: true,
    cancelable: true
  });
  emitEvent(binding.element, newEvent, binding);
}
/**
 * Emits the new event. Unbinds the event if the event was registered
 * at bindOnce.
 * @param {Element} target - Element object to emit the event to.
 * @param {Event} event - The CustomEvent to emit.
 * @param {Binding} binding - An object of type Binding
 */


function emitEvent(target, event, binding) {
  target.dispatchEvent(event);

  if (binding.bindOnce) {
    ZingTouch.unbind(binding.element, binding.gesture.getType());
  }
}

/* harmony default export */ __webpack_exports__["default"] = (dispatcher);

/***/ }),

/***/ "./src/core/interpreter.js":
/*!*********************************!*\
  !*** ./src/core/interpreter.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./src/core/util.js");
/**
 * @file interpreter.js
 * Contains logic for the interpreter
 */

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
  var evType = _util_js__WEBPACK_IMPORTED_MODULE_0__["default"].normalizeEvent[event.type];
  var events = state.inputs.map(function (input) {
    return input.current;
  });
  var candidates = bindings.reduce(function (accumulator, binding) {
    var data = binding.gesture[evType](state.inputs, state, binding.element);
    if (data) accumulator.push({
      binding: binding,
      data: data,
      events: events
    });
    return accumulator;
  }, []);
  return candidates;
}

/* harmony default export */ __webpack_exports__["default"] = (interpreter);

/***/ }),

/***/ "./src/core/main.js":
/*!**************************!*\
  !*** ./src/core/main.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ZingTouch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../ZingTouch.js */ "./src/ZingTouch.js");
/**
 * @file main.js
 * Main file to setup event listeners on the document,
 * and to expose the ZingTouch object
 */

window.ZingTouch = _ZingTouch_js__WEBPACK_IMPORTED_MODULE_0__["default"];

/***/ }),

/***/ "./src/core/util.js":
/*!**************************!*\
  !*** ./src/core/util.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @file util.js
 * Various accessor and mutator functions to handle state and validation.
 */
var CIRCLE_DEGREES = 360;
var HALF_CIRCLE_DEGREES = 180;
/**
 *  Contains generic helper functions
 * @type {Object}
 * @namespace util
 */

var util = {
  /**
   * Normalizes window events to be either of type start, move, or end.
   * @param {String} type - The event type emitted by the browser
   * @return {null|String} - The normalized event, or null if it is an
   * event not predetermined.
   */
  normalizeEvent: Object.freeze({
    mousedown: 'start',
    touchstart: 'start',
    pointerdown: 'start',
    mousemove: 'move',
    touchmove: 'move',
    pointermove: 'move',
    mouseup: 'end',
    touchend: 'end',
    pointerup: 'end'
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
  isWithin: function isWithin(currentX, currentY, previousX, previousY, tolerance) {
    return Math.abs(currentY - previousY) <= tolerance && Math.abs(currentX - previousX) <= tolerance;
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
  distanceBetweenTwoPoints: function distanceBetweenTwoPoints(x0, x1, y0, y1) {
    var dist = Math.sqrt((x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0));
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
  getMidpoint: function getMidpoint(x0, x1, y0, y1) {
    return {
      x: (x0 + x1) / 2,
      y: (y0 + y1) / 2
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
  getAngle: function getAngle(originX, originY, projectionX, projectionY) {
    var angle = Math.atan2(projectionY - originY, projectionX - originX) * (HALF_CIRCLE_DEGREES / Math.PI);
    return CIRCLE_DEGREES - (angle < 0 ? CIRCLE_DEGREES + angle : angle);
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
  getAngularDistance: function getAngularDistance(start, end) {
    var angle = (end - start) % CIRCLE_DEGREES;
    var sign = angle < 0 ? 1 : -1;
    angle = Math.abs(angle);
    return angle > HALF_CIRCLE_DEGREES ? sign * (CIRCLE_DEGREES - angle) : sign * angle;
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
  getVelocity: function getVelocity(startX, startY, startTime, endX, endY, endTime) {
    var distance = this.distanceBetweenTwoPoints(startX, endX, startY, endY);
    return distance / (endTime - startTime);
  },

  /**
   * Returns the farthest right input
   * @param {Array} inputs
   * @return {Object}
   */
  getRightMostInput: function getRightMostInput(inputs) {
    var rightMost = null;
    var distance = Number.MIN_VALUE;
    inputs.forEach(function (input) {
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
  isInteger: function isInteger(value) {
    return typeof value === 'number' && value % 1 === 0;
  },

  /**
   * Determines if the x,y position of the input is within then target.
   * @param {Number} x -clientX
   * @param {Number} y -clientY
   * @param {Element} target
   * @return {Boolean}
   */
  isInside: function isInside(x, y, target) {
    var rect = target.getBoundingClientRect();
    return x > rect.left && x < rect.left + rect.width && y > rect.top && y < rect.top + rect.height;
  },

  /**
   * Polyfill for event.propagationPath
   * @param {Event} event
   * @return {Array}
   */
  getPropagationPath: function getPropagationPath(event) {
    if (event.path) {
      return event.path;
    } else {
      var path = [];
      var node = event.target;

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
  getPathIndex: function getPathIndex(path, element) {
    var index = path.length;
    path.forEach(function (obj, i) {
      if (obj === element) {
        index = i;
      }
    });
    return index;
  },
  setMSPreventDefault: function setMSPreventDefault(element) {
    element.style['-ms-content-zooming'] = 'none';
    element.style['touch-action'] = 'none';
  },
  removeMSPreventDefault: function removeMSPreventDefault(element) {
    element.style['-ms-content-zooming'] = '';
    element.style['touch-action'] = '';
  },
  preventDefault: function preventDefault(event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (util);

/***/ }),

/***/ "./src/gestures/Distance.js":
/*!**********************************!*\
  !*** ./src/gestures/Distance.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Gesture_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gesture.js */ "./src/gestures/Gesture.js");
/* harmony import */ var _core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../core/util.js */ "./src/core/util.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @file Distance.js
 * Contains the abstract Distance class
 */


var DEFAULT_INPUTS = 2;
var DEFAULT_MIN_THRESHOLD = 1;
/**
 * A Distance is defined as two inputs moving either together or apart.
 * @class Distance
 */

var Distance =
/*#__PURE__*/
function (_Gesture) {
  _inherits(Distance, _Gesture);

  /**
   * Constructor function for the Distance class.
   * @param {Object} options
   */
  function Distance(options) {
    var _this;

    _classCallCheck(this, Distance);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Distance).call(this));
    /**
     * The type of the Gesture.
     * @type {String}
     */

    _this.type = 'distance';
    /**
     * The minimum amount in pixels the inputs must move until it is fired.
     * @type {Number}
     */

    _this.threshold = options && options.threshold ? options.threshold : DEFAULT_MIN_THRESHOLD;
    return _this;
  }
  /**
   * Event hook for the start of a gesture. Initialized the lastEmitted
   * gesture and stores it in the first input for reference events.
   * @param {Array} inputs
   */


  _createClass(Distance, [{
    key: "start",
    value: function start(inputs, state, element) {
      if (!this.isValid(inputs, state, element)) {
        return null;
      }

      if (inputs.length === DEFAULT_INPUTS) {
        // Store the progress in the first input.
        var progress = inputs[0].getGestureProgress(this.type);
        progress.lastEmittedDistance = _core_util_js__WEBPACK_IMPORTED_MODULE_1__["default"].distanceBetweenTwoPoints(inputs[0].current.x, inputs[1].current.x, inputs[0].current.y, inputs[1].current.y);
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

  }, {
    key: "move",
    value: function move(inputs, state, element) {
      if (state.numActiveInputs() === DEFAULT_INPUTS) {
        var currentDistance = _core_util_js__WEBPACK_IMPORTED_MODULE_1__["default"].distanceBetweenTwoPoints(inputs[0].current.x, inputs[1].current.x, inputs[0].current.y, inputs[1].current.y);
        var centerPoint = _core_util_js__WEBPACK_IMPORTED_MODULE_1__["default"].getMidpoint(inputs[0].current.x, inputs[1].current.x, inputs[0].current.y, inputs[1].current.y); // Progress is stored in the first input.

        var progress = inputs[0].getGestureProgress(this.type);
        var change = currentDistance - progress.lastEmittedDistance;

        if (Math.abs(change) >= this.threshold) {
          progress.lastEmittedDistance = currentDistance;
          return {
            distance: currentDistance,
            center: centerPoint,
            change: change
          };
        }
      }

      return null;
    }
  }]);

  return Distance;
}(_Gesture_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Distance);

/***/ }),

/***/ "./src/gestures/Gesture.js":
/*!*********************************!*\
  !*** ./src/gestures/Gesture.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../core/util.js */ "./src/core/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @file Gesture.js
 * Contains the Gesture class
 */

/**
 * The Gesture class that all gestures inherit from.
 */

var Gesture =
/*#__PURE__*/
function () {
  /**
   * Constructor function for the Gesture class.
   * @class Gesture
   */
  function Gesture() {
    _classCallCheck(this, Gesture);

    /**
     * The generic string type of gesture ('expand'|'distance'|
     *  'rotate'|'swipe'|'tap').
     * @type {String}
     */
    this.type = null;
    /**
     * The unique identifier for each gesture determined at bind time by the
     * state object. This allows for distinctions across instance variables of
     * Gestures that are created on the fly (e.g. Tap-1, Tap-2, etc).
     * @type {String|null}
     */

    this.id = null;
  }
  /**
   * Set the type of the gesture to be called during an event
   * @param {String} type - The unique identifier of the gesture being created.
   */


  _createClass(Gesture, [{
    key: "setType",
    value: function setType(type) {
      this.type = type;
    }
    /**
     * getType() - Returns the generic type of the gesture
     * @return {String} - The type of gesture
     */

  }, {
    key: "getType",
    value: function getType() {
      return this.type;
    }
    /**
     * Set the id of the gesture to be called during an event
     * @param {String} id - The unique identifier of the gesture being created.
     */

  }, {
    key: "setId",
    value: function setId(id) {
      this.id = id;
    }
    /**
     * Return the id of the event. If the id does not exist, return the type.
     * @return {String}
     */

  }, {
    key: "getId",
    value: function getId() {
      return this.id !== null ? this.id : this.type;
    }
    /**
     * Updates internal properties with new ones, only if the properties exist.
     * @param {Object} object
     */

  }, {
    key: "update",
    value: function update(object) {
      var _this = this;

      Object.keys(object).forEach(function (key) {
        _this[key] = object[key];
      });
    }
    /**
     * start() - Event hook for the start of a gesture
     * @param {Array} inputs - The array of Inputs on the screen
    * @param {Object} state - The state object of the current region.
    * @param {Element} element - The element associated to the binding.
     * @return {null|Object}  - Default of null
     */

  }, {
    key: "start",
    value: function start(inputs, state, element) {
      return null;
    }
    /**
     * move() - Event hook for the move of a gesture
     * @param {Array} inputs - The array of Inputs on the screen
     * @param {Object} state - The state object of the current region.
     * @param {Element} element - The element associated to the binding.
     * @return {null|Object} - Default of null
     */

  }, {
    key: "move",
    value: function move(inputs, state, element) {
      return null;
    }
    /**
     * end() - Event hook for the move of a gesture
     * @param {Array} inputs - The array of Inputs on the screen
     * @return {null|Object}  - Default of null
     */

  }, {
    key: "end",
    value: function end(inputs) {
      return null;
    }
    /**
    * isValid() - Pre-checks to ensure the invariants of a gesture are satisfied.
    * @param {Array} inputs - The array of Inputs on the screen
    * @param {Object} state - The state object of the current region.
    * @param {Element} element - The element associated to the binding.
    * @return {boolean} - If the gesture is valid
    */

  }, {
    key: "isValid",
    value: function isValid(inputs, state, element) {
      return inputs.every(function (input) {
        return _core_util_js__WEBPACK_IMPORTED_MODULE_0__["default"].isInside(input.initial.x, input.initial.y, element);
      });
    }
  }]);

  return Gesture;
}();

/* harmony default export */ __webpack_exports__["default"] = (Gesture);

/***/ }),

/***/ "./src/gestures/Pan.js":
/*!*****************************!*\
  !*** ./src/gestures/Pan.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Gesture_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gesture.js */ "./src/gestures/Gesture.js");
/* harmony import */ var _core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../core/util.js */ "./src/core/util.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @file Pan.js
 * Contains the Pan class
 */


var DEFAULT_INPUTS = 1;
var DEFAULT_MIN_THRESHOLD = 1;
/**
 * A Pan is defined as a normal movement in any direction on a screen.
 * Pan gestures do not track start events and can interact with distance gestures
 * @class Pan
 */

var Pan =
/*#__PURE__*/
function (_Gesture) {
  _inherits(Pan, _Gesture);

  /**
   * Constructor function for the Pan class.
   * @param {Object} [options] - The options object.
   * @param {Number} [options.numInputs=1] - Number of inputs for the
   *  Pan gesture.
   * @param {Number} [options.threshold=1] - The minimum number of
   * pixels the input has to move to trigger this gesture.
   */
  function Pan(options) {
    var _this;

    _classCallCheck(this, Pan);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Pan).call(this));
    /**
     * The type of the Gesture.
     * @type {String}
     */

    _this.type = 'pan';
    /**
     * The number of inputs to trigger a Pan can be variable,
     * and the maximum number being a factor of the browser.
     * @type {Number}
     */

    _this.numInputs = options && options.numInputs ? options.numInputs : DEFAULT_INPUTS;
    /**
     * The minimum amount in pixels the pan must move until it is fired.
     * @type {Number}
     */

    _this.threshold = options && options.threshold ? options.threshold : DEFAULT_MIN_THRESHOLD;
    return _this;
  }
  /**
   * Event hook for the start of a gesture. Marks each input as active,
   * so it can invalidate any end events.
   * @param {Array} inputs
   */


  _createClass(Pan, [{
    key: "start",
    value: function start(inputs) {
      var _this2 = this;

      inputs.forEach(function (input) {
        var progress = input.getGestureProgress(_this2.getId());
        progress.active = true;
        progress.lastEmitted = {
          x: input.current.x,
          y: input.current.y
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

  }, {
    key: "move",
    value: function move(inputs, state, element) {
      var _this3 = this;

      if (this.numInputs !== inputs.length) return null;
      var output = {
        data: []
      };
      inputs.forEach(function (input, index) {
        var progress = input.getGestureProgress(_this3.getId());
        var distanceFromLastEmit = _core_util_js__WEBPACK_IMPORTED_MODULE_1__["default"].distanceBetweenTwoPoints(progress.lastEmitted.x, progress.lastEmitted.y, input.current.x, input.current.y);
        var reachedThreshold = distanceFromLastEmit >= _this3.threshold;

        if (progress.active && reachedThreshold) {
          output.data[index] = packData(input, progress);
          progress.lastEmitted.x = input.current.x;
          progress.lastEmitted.y = input.current.y;
        }
      });
      return output;

      function packData(input, progress) {
        var distanceFromOrigin = _core_util_js__WEBPACK_IMPORTED_MODULE_1__["default"].distanceBetweenTwoPoints(input.initial.x, input.current.x, input.initial.y, input.current.y);
        var directionFromOrigin = _core_util_js__WEBPACK_IMPORTED_MODULE_1__["default"].getAngle(input.initial.x, input.initial.y, input.current.x, input.current.y);
        var currentDirection = _core_util_js__WEBPACK_IMPORTED_MODULE_1__["default"].getAngle(progress.lastEmitted.x, progress.lastEmitted.y, input.current.x, input.current.y);
        var change = {
          x: input.current.x - progress.lastEmitted.x,
          y: input.current.y - progress.lastEmitted.y
        };
        return {
          distanceFromOrigin: distanceFromOrigin,
          directionFromOrigin: directionFromOrigin,
          currentDirection: currentDirection,
          change: change
        };
      }
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

  }, {
    key: "end",
    value: function end(inputs) {
      var _this4 = this;

      inputs.forEach(function (input) {
        var progress = input.getGestureProgress(_this4.getId());
        progress.active = false;
      });
      return null;
    }
    /* end*/

  }]);

  return Pan;
}(_Gesture_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Pan);

/***/ }),

/***/ "./src/gestures/Rotate.js":
/*!********************************!*\
  !*** ./src/gestures/Rotate.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Gesture_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gesture.js */ "./src/gestures/Gesture.js");
/* harmony import */ var _core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../core/util.js */ "./src/core/util.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @file Rotate.js
 * Contains the Rotate class
 */


var DEFAULT_INPUTS = 2;
/**
 * A Rotate is defined as two inputs moving about a circle,
 * maintaining a relatively equal radius.
 * @class Rotate
 */

var Rotate =
/*#__PURE__*/
function (_Gesture) {
  _inherits(Rotate, _Gesture);

  /**
   * Constructor function for the Rotate class.
   */
  function Rotate() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Rotate);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Rotate).call(this));
    /**
     * The type of the Gesture.
     * @type {String}
     */

    _this.type = 'rotate';
    /**
     * The number of touches required to emit Rotate events.
     * @type {Number}
     */

    _this.numInputs = options.numInputs || DEFAULT_INPUTS;
    return _this;
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


  _createClass(Rotate, [{
    key: "move",
    value: function move(inputs, state, element) {
      var numActiveInputs = state.numActiveInputs();
      if (this.numInputs !== numActiveInputs) return null;
      var currentPivot, initialPivot;
      var input;

      if (numActiveInputs === 1) {
        var bRect = element.getBoundingClientRect();
        currentPivot = {
          x: bRect.left + bRect.width / 2,
          y: bRect.top + bRect.height / 2
        };
        initialPivot = currentPivot;
        input = inputs[0];
      } else {
        currentPivot = _core_util_js__WEBPACK_IMPORTED_MODULE_1__["default"].getMidpoint(inputs[0].current.x, inputs[1].current.x, inputs[0].current.y, inputs[1].current.y);
        input = _core_util_js__WEBPACK_IMPORTED_MODULE_1__["default"].getRightMostInput(inputs);
      } // Translate the current pivot point.


      var currentAngle = _core_util_js__WEBPACK_IMPORTED_MODULE_1__["default"].getAngle(currentPivot.x, currentPivot.y, input.current.x, input.current.y);
      var progress = input.getGestureProgress(this.getId());

      if (!progress.initialAngle) {
        progress.initialAngle = progress.previousAngle = currentAngle;
        progress.distance = progress.change = 0;
      } else {
        progress.change = _core_util_js__WEBPACK_IMPORTED_MODULE_1__["default"].getAngularDistance(progress.previousAngle, currentAngle);
        progress.distance = progress.distance + progress.change;
      }

      progress.previousAngle = currentAngle;
      return {
        angle: currentAngle,
        distanceFromOrigin: progress.distance,
        distanceFromLast: progress.change
      };
    }
    /* move*/

  }]);

  return Rotate;
}(_Gesture_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Rotate);

/***/ }),

/***/ "./src/gestures/Swipe.js":
/*!*******************************!*\
  !*** ./src/gestures/Swipe.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Gesture_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gesture.js */ "./src/gestures/Gesture.js");
/* harmony import */ var _core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../core/util.js */ "./src/core/util.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @file Swipe.js
 * Contains the Swipe class
 */


var DEFAULT_INPUTS = 1;
var DEFAULT_MAX_REST_TIME = 100;
var DEFAULT_ESCAPE_VELOCITY = 0.2;
var DEFAULT_TIME_DISTORTION = 100;
var DEFAULT_MAX_PROGRESS_STACK = 10;
/**
 * A swipe is defined as input(s) moving in the same direction in an relatively
 * increasing velocity and leaving the screen at some point before it drops
 * below it's escape velocity.
 * @class Swipe
 */

var Swipe =
/*#__PURE__*/
function (_Gesture) {
  _inherits(Swipe, _Gesture);

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
  function Swipe(options) {
    var _this;

    _classCallCheck(this, Swipe);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Swipe).call(this));
    /**
     * The type of the Gesture
     * @type {String}
     */

    _this.type = 'swipe';
    /**
     * The number of inputs to trigger a Swipe can be variable,
     * and the maximum number being a factor of the browser.
     * @type {Number}
     */

    _this.numInputs = options && options.numInputs ? options.numInputs : DEFAULT_INPUTS;
    /**
     * The maximum resting time a point has between it's last move and
     * current move events.
     * @type {Number}
     */

    _this.maxRestTime = options && options.maxRestTime ? options.maxRestTime : DEFAULT_MAX_REST_TIME;
    /**
     * The minimum velocity the input has to be at to emit a swipe.
     * This is useful for determining the difference between
     * a swipe and a pan gesture.
     * @type {number}
     */

    _this.escapeVelocity = options && options.escapeVelocity ? options.escapeVelocity : DEFAULT_ESCAPE_VELOCITY;
    /**
     * (EXPERIMENTAL) A value of time in milliseconds to distort between events.
     * Browsers do not accurately measure time with the Date constructor in
     * milliseconds, so consecutive events sometimes display the same timestamp
     * but different x/y coordinates. This will distort a previous time
     * in such cases by the timeDistortion's value.
     * @type {number}
     */

    _this.timeDistortion = options && options.timeDistortion ? options.timeDistortion : DEFAULT_TIME_DISTORTION;
    /**
     * (EXPERIMENTAL) The maximum amount of move events to keep track of for a
     * swipe. This helps give a more accurate estimate of the user's velocity.
     * @type {number}
     */

    _this.maxProgressStack = options && options.maxProgressStack ? options.maxProgressStack : DEFAULT_MAX_PROGRESS_STACK;
    return _this;
  }
  /**
   * Event hook for the move of a gesture. Captures an input's x/y coordinates
   * and the time of it's event on a stack.
   * @param {Array} inputs - The array of Inputs on the screen.
   * @param {Object} state - The state object of the current region.
   * @param {Element} element - The element associated to the binding.
   * @return {null} - Swipe does not emit from a move.
   */


  _createClass(Swipe, [{
    key: "move",
    value: function move(inputs, state, element) {
      if (this.numInputs === inputs.length) {
        for (var i = 0; i < inputs.length; i++) {
          var progress = inputs[i].getGestureProgress(this.getId());

          if (!progress.moves) {
            progress.moves = [];
          }

          progress.moves.push({
            time: new Date().getTime(),
            x: inputs[i].current.x,
            y: inputs[i].current.y
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

  }, {
    key: "end",
    value: function end(inputs) {
      if (this.numInputs === inputs.length) {
        var output = {
          data: []
        };

        for (var i = 0; i < inputs.length; i++) {
          // Determine if all input events are on the 'end' event.
          if (inputs[i].current.type !== 'end') {
            return;
          }

          var progress = inputs[i].getGestureProgress(this.getId());

          if (progress.moves && progress.moves.length > 2) {
            // CHECK : Return if the input has not moved in maxRestTime ms.
            var currentMove = progress.moves.pop();

            if (new Date().getTime() - currentMove.time > this.maxRestTime) {
              return null;
            }

            var lastMove = void 0;
            var index = progress.moves.length - 1;
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

            var velocity = _core_util_js__WEBPACK_IMPORTED_MODULE_1__["default"].getVelocity(lastMove.x, lastMove.y, lastMove.time, currentMove.x, currentMove.y, currentMove.time);
            output.data[i] = {
              velocity: velocity,
              distance: _core_util_js__WEBPACK_IMPORTED_MODULE_1__["default"].distanceBetweenTwoPoints(lastMove.x, currentMove.x, lastMove.y, currentMove.y),
              duration: currentMove.time - lastMove.time,
              currentDirection: _core_util_js__WEBPACK_IMPORTED_MODULE_1__["default"].getAngle(lastMove.x, lastMove.y, currentMove.x, currentMove.y)
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

  }]);

  return Swipe;
}(_Gesture_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Swipe);

/***/ }),

/***/ "./src/gestures/Tap.js":
/*!*****************************!*\
  !*** ./src/gestures/Tap.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Gesture_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gesture.js */ "./src/gestures/Gesture.js");
/* harmony import */ var _core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../core/util.js */ "./src/core/util.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @file Tap.js
 * Contains the Tap class
 */


var DEFAULT_MIN_DELAY_MS = 0;
var DEFAULT_MAX_DELAY_MS = 300;
var DEFAULT_INPUTS = 1;
var DEFAULT_MOVE_PX_TOLERANCE = 10;
/**
 * A Tap is defined as a touchstart to touchend event in quick succession.
 * @class Tap
 */

var Tap =
/*#__PURE__*/
function (_Gesture) {
  _inherits(Tap, _Gesture);

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
  function Tap(options) {
    var _this;

    _classCallCheck(this, Tap);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tap).call(this));
    /**
     * The type of the Gesture.
     * @type {String}
     */

    _this.type = 'tap';
    /**
     * The minimum amount between a touchstart and a touchend can be configured
     * in milliseconds. The minimum delay starts to count down when the expected
     * number of inputs are on the screen, and ends when ALL inputs are off the
     * screen.
     * @type {Number}
     */

    _this.minDelay = options && options.minDelay ? options.minDelay : DEFAULT_MIN_DELAY_MS;
    /**
     * The maximum delay between a touchstart and touchend can be configured in
     * milliseconds. The maximum delay starts to count down when the expected
     * number of inputs are on the screen, and ends when ALL inputs are off the
     * screen.
     * @type {Number}
     */

    _this.maxDelay = options && options.maxDelay ? options.maxDelay : DEFAULT_MAX_DELAY_MS;
    /**
     * The number of inputs to trigger a Tap can be variable,
     * and the maximum number being a factor of the browser.
     * @type {Number}
     */

    _this.numInputs = options && options.numInputs ? options.numInputs : DEFAULT_INPUTS;
    /**
     * A move tolerance in pixels allows some slop between a user's start to end
     * events. This allows the Tap gesture to be triggered more easily.
     * @type {number}
     */

    _this.tolerance = options && options.tolerance ? options.tolerance : DEFAULT_MOVE_PX_TOLERANCE;
    return _this;
  }
  /* constructor*/

  /**
   * Event hook for the start of a gesture. Keeps track of when the inputs
   * trigger the start event.
   * @param {Array} inputs - The array of Inputs on the screen.
   * @return {null} - Tap does not trigger on a start event.
   */


  _createClass(Tap, [{
    key: "start",
    value: function start(inputs) {
      var _this2 = this;

      if (inputs.length === this.numInputs) {
        inputs.forEach(function (input) {
          var progress = input.getGestureProgress(_this2.type);
          progress.start = new Date().getTime();
        });
      }

      return null;
    }
    /* start*/

    /**
     * Event hook for the move of a gesture. The Tap event reaches here if the
     * user starts to move their input before an 'end' event is reached.
     * @param {Array} inputs - The array of Inputs on the screen.
     * @param {Object} state - The state object of the current region.
     * @param {Element} element - The element associated to the binding.
     * @return {null} - Tap does not trigger on a move event.
     */

  }, {
    key: "move",
    value: function move(inputs, state, element) {
      var _this3 = this;

      for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].getCurrentEventType() === 'move') {
          var current = inputs[i].current;
          var previous = inputs[i].previous;

          if (!_core_util_js__WEBPACK_IMPORTED_MODULE_1__["default"].isWithin(current.x, current.y, previous.x, previous.y, this.tolerance)) {
            var _ret = function () {
              var type = _this3.type;
              inputs.forEach(function (input) {
                input.resetProgress(type);
              });
              return {
                v: null
              };
            }();

            if (_typeof(_ret) === "object") return _ret.v;
          }
        }
      }

      return null;
    }
    /* move*/

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

  }, {
    key: "end",
    value: function end(inputs) {
      if (inputs.length !== this.numInputs) {
        return null;
      }

      var startTime = Number.MAX_VALUE;

      for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].getCurrentEventType() !== 'end') {
          return null;
        }

        var progress = inputs[i].getGestureProgress(this.type);

        if (!progress.start) {
          return null;
        } // Find the most recent input's startTime


        if (progress.start < startTime) {
          startTime = progress.start;
        }
      }

      var interval = new Date().getTime() - startTime;

      if (this.minDelay <= interval && this.maxDelay >= interval) {
        return {
          interval: interval
        };
      } else {
        var type = this.type;
        inputs.forEach(function (input) {
          input.resetProgress(type);
        });
        return null;
      }
    }
    /* end*/

  }]);

  return Tap;
}(_Gesture_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Tap);

/***/ })

/******/ });
//# sourceMappingURL=zingtouch.js.map