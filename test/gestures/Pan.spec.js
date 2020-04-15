'use strict';

/**
 * @file Tap.js
 * Tests Tap class
 */
import Pan from './../../src/gestures/Pan.js';

/** @test {Pan} */
describe('Pan', function() {
  it('should be instantiated', function() {
    expect(Pan).to.not.equal(null);
  });

  it('should return a Tap object.', function() {
    let _pan = new Pan();
    expect(_pan instanceof Pan).to.be.true;
  });

  it('should return accept threshold and number of inputs as parameters',
    function() {
      let _pan = new Pan({
        threshold: 2,
        numInputs: 2,
      });
      expect(_pan.numInputs).to.equal(2);
      expect(_pan.threshold).to.equal(2);
    });

  it('should return onStart, onMove and onEnd as functions',
    function() {
      const onStart = () => {};
      const onMove = () => {};
      const onEnd = () => {};
      let _pan = new Pan({
        onStart,
        onMove,
        onEnd
      });
      expect(typeof _pan.onStart).to.equal('function');
      expect(typeof _pan.onMove).to.equal('function');
      expect(typeof _pan.onEnd).to.equal('function');
    });

  it('should return onStart, onMove and onEnd as undefined if they are not functions',
    function() {
      const onStart = 'hello';
      const onMove = 23;
      const onEnd = { happy: 'kitty'};
      let _pan = new Pan({
        onStart,
        onMove,
        onEnd
      });
      expect(typeof _pan.onStart).to.equal('undefined');
      expect(typeof _pan.onMove).to.equal('undefined');
      expect(typeof _pan.onEnd).to.equal('undefined');
    });
});
