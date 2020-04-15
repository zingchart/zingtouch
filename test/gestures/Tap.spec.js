'use strict';

/**
 * @file Tap.js
 * Tests Tap class
 */
import Tap from './../../src/gestures/Tap.js';

/** @test {Tap} */
describe('Tap', function() {
  it('should be instantiated', function() {
    expect(Tap).to.not.equal(null);
  });

  it('should return a Tap object.', function() {
    let _tap = new Tap();
    expect(_tap instanceof Tap).to.be.true;
  });

  it('should return accept delay and number of inputs as parameters',
    function() {
      let _tap = new Tap({
        maxDelay: 2000,
        numInputs: 2,
      });
      expect(_tap.maxDelay).to.equal(2000);
      expect(_tap.numInputs).to.equal(2);
    });
  it('should return onStart, onMove and onEnd as functions',
    function() {
      const onStart = () => {};
      const onMove = () => {};
      const onEnd = () => {};
      let _tap = new Tap({
        onStart,
        onMove,
        onEnd
      });
      expect(typeof _tap.onStart).to.equal('function');
      expect(typeof _tap.onMove).to.equal('function');
      expect(typeof _tap.onEnd).to.equal('function');
    });

  it('should return onStart, onMove and onEnd as undefined if they are not functions',
    function() {
      const onStart = 'hello';
      const onMove = 23;
      const onEnd = { happy: 'kitty'};
      let _tap = new Tap({
        onStart,
        onMove,
        onEnd
      });
      expect(typeof _tap.onStart).to.equal('undefined');
      expect(typeof _tap.onMove).to.equal('undefined');
      expect(typeof _tap.onEnd).to.equal('undefined');
    });
});
