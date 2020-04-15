'use strict';

/**
 * @file Tap.js
 * Tests Tap class
 */
import Distance from './../../src/gestures/Distance.js';

/** @test {Distance} */
describe('Distance', function() {
  it('should be instantiated', function() {
    expect(Distance).to.not.equal(null);
  });

  it('should return a Tap object.', function() {
    let _distance = new Distance();
    expect(_distance instanceof Distance).to.be.true;
  });

  it('should return accept threshold and number of inputs as parameters',
    function() {
      let _distance = new Distance({
        threshold: 2,
      });
      expect(_distance.threshold).to.equal(2);
    });

  it('should return onStart, onMove and onEnd as functions',
    function() {
      const onStart = () => {};
      const onMove = () => {};
      let _distance = new Distance({
        onStart,
        onMove
      });
      expect(typeof _distance.onStart).to.equal('function');
      expect(typeof _distance.onMove).to.equal('function');
    });

  it('should return onStart, onMove and onEnd as undefined if they are not functions',
    function() {
      const onStart = 'hello';
      const onMove = 23;
      let _distance = new Distance({
        onStart,
        onMove
      });
      expect(typeof _distance.onStart).to.equal('undefined');
      expect(typeof _distance.onMove).to.equal('undefined');
    });
});
