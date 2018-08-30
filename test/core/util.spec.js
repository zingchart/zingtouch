'use strict';

/**
 * @file utils.js
 * Tests the user-facing API, ensuring the object functions
 * while not exposing private members.
 */

import util from './../../src/core/util.js';

/** @test {util} */
describe('util', function() {
  it('should be instantiated', function() {
    expect(util).to.not.equal(null);
  });
});

/** @test {util.normalizeEvent} */
describe('util.normalizeEvent', function() {
  it('should expect to emit start', function() {
    expect(util.normalizeEvent[ 'mousedown' ]).to.equal('start');
    expect(util.normalizeEvent[ 'touchstart' ]).to.equal('start');
  });

  it('should expect to emit move', function() {
    expect(util.normalizeEvent[ 'mousemove' ]).to.equal('move');
    expect(util.normalizeEvent[ 'touchmove' ]).to.equal('move');
  });

  it('should expect to emit end', function() {
    expect(util.normalizeEvent[ 'mouseup' ]).to.equal('end');
    expect(util.normalizeEvent[ 'touchend' ]).to.equal('end');
  });

  it('should expect to emit null for unknown events', function() {
    expect(util.normalizeEvent[ 'foobar' ]).to.be.undefined;
  });
});

/** @test {util.isWithin} */
describe('util.isWithin', function() {
  it('should expect be true when points are within a tolerance', function() {
    expect(util.isWithin(0, 0, 0, 0, 10)).to.be.true;
    expect(util.isWithin(10, 10, 10, 10, 0)).to.be.true;
    expect(util.isWithin(0, -10, 9, 0, 10)).to.be.true;
  });

  it('should expect be false when points are outside a tolerance', function() {
    expect(util.isWithin(0, 0, 0, 0, -1)).to.be.false;
    expect(util.isWithin(10, 10, 20, 20, 0)).to.be.false;
  });
});

/** @test {util.distanceBetweenTwoPoints} */
describe('util.distanceBetweenTwoPoints', function() {
  it('should return a distance of 5', function() {
    expect(util.distanceBetweenTwoPoints(0, 4, 0, 3)).to.equal(5);
  });

  it('should return a distance of 0', function() {
    expect(util.distanceBetweenTwoPoints(0, 0, 0, 0)).to.equal(0);
  });

  it('should return a distance of 0', function() {
    expect(util.distanceBetweenTwoPoints('foo', 0, 0, 0)).to.be.NaN;
  });
});

/** @test {util.getAngle} */
describe('util.getAngle', function() {
  it('should return an angle of PI/4', function() {
    expect(util.getAngle(0, 0, 3, 3)).to.equal(Math.PI / 4);
  });

  it('should return an angle of 0', function() {
    expect(util.getAngle(0, 0, 0, 0)).to.equal(0);
  });

  it('should return an angle of PI', function() {
    expect(util.getAngle(0, 0, -3, 0)).to.equal(Math.PI);
  });
});

/** @test {util.getAngularDistance} */
describe('util.getAngularDistance', function() {
  it('should return an angle of PI / 2', function() {
    expect(util.getAngularDistance(Math.PI * 3/2, Math.PI * 2)).to.equal(
      Math.PI / 2
    );
  });

  it('should return an angle of PI', function() {
    expect(util.getAngularDistance(0, Math.PI)).to.equal(Math.PI);
  });

  it('should return an angle of -PI', function() {
    expect(util.getAngularDistance(Math.PI, 0)).to.equal(-Math.PI);
  });

  it('should return an angle of 0', function() {
    expect(util.getAngularDistance(Math.PI, Math.PI)).to.equal(0);
  });
});
