/**
 * @file ZingEvent.js
 * Contains logic for ZingEvents
 */

import util from '../util.js';

const INITIAL_COORDINATE = 0;
/**
 * An event wrapper that normalizes events across browsers and input devices
 * @class ZingEvent
 */
class ZingEvent {
  /**
   * @constructor
   * @param {Event} event - The event object being wrapped.
   * @param {Array} event.touches - The number of touches on
   *  a screen (mobile only).
   * @param {Object} event.changedTouches - The TouchList representing
   * points that participated in the event.
   * @param {Number} touchIdentifier - The index of touch if applicable
   */
  constructor(event, touchIdentifier) {
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
    this.type = util.normalizeEvent[ event.type ];

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

    let eventObj;
    if (event.touches && event.changedTouches) {
      eventObj = Array.from(event.changedTouches).find( t => {
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
  }
}

export default ZingEvent;
