'use strict';

/**
 * @file Tap.js
 * Tests Tap class
 */
import Swipe from './../../src/gestures/Swipe.js';

/** @test {Swipe} */
describe('Swipe', function() {
  it('should be instantiated', function() {
    expect(Swipe).to.not.equal(null);
  });

  it('should return a Tap object.', function() {
    let _swipe = new Swipe();
    expect(_swipe instanceof Swipe).to.be.true;
  });

  it('should return accept threshold and number of inputs as parameters',
    function() {
      let _swipe = new Swipe({
        numInputs: 2,
        maxRestTime: 150,
        escapeVelocity: 0.3,
        timeDistortion: 200,
        maxProgressStack: 20,
      });

      expect(_swipe.numInputs).to.equal(2);
      expect(_swipe.maxRestTime).to.equal(150);
      expect(_swipe.escapeVelocity).to.equal(0.3);
      expect(_swipe.timeDistortion).to.equal(200);
      expect(_swipe.maxProgressStack).to.equal(20);
    });

  it('should return onStart, onMove and onEnd as functions',
    function() {
      const onMove = () => {};
      const onEnd = () => {};
      let _swipe = new Swipe({
        onMove,
        onEnd
      });
      expect(typeof _swipe.onMove).to.equal('function');
      expect(typeof _swipe.onEnd).to.equal('function');
    });

  it('should return onStart, onMove and onEnd as undefined if they are not functions',
    function() {
      const onMove = 23;
      const onEnd = { happy: 'kitty'};
      let _swipe = new Swipe({
        onMove,
        onEnd
      });
      expect(typeof _swipe.onMove).to.equal('undefined');
      expect(typeof _swipe.onEnd).to.equal('undefined');
    });
});
