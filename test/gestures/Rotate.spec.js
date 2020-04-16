'use strict';

/**
 * @file Tap.js
 * Tests Tap class
 */
import Rotate from './../../src/gestures/Rotate.js';

/** @test {Rotate} */
describe('Rotate', function() {
  it('should be instantiated', function() {
    expect(Rotate).to.not.equal(null);
  });

  it('should return a Tap object.', function() {
    let _rotate = new Rotate();
    expect(_rotate instanceof Rotate).to.be.true;
  });

  it('should return accept threshold and number of inputs as parameters',
    function() {
      let _rotate = new Rotate({
        numInputs: 2,
      });
      expect(_rotate.numInputs).to.equal(2);
    });

  it('should return onStart, onMove and onEnd as functions',
    function() {
      const onMove = () => {};
      let _rotate = new Rotate({
        onMove
      });
      expect(typeof _rotate.onMove).to.equal('function');
    });

  it('should return onStart, onMove and onEnd as undefined if they are not functions',
    function() {
      const onMove = 23;
      let _rotate = new Rotate({
        onMove
      });
      expect(typeof _rotate.onMove).to.equal('undefined');
    });
});
