'use strict';

/**
 * @file Region.spec..js
 * Tests Region class
 */
import Region from './../../../src/core/classes/Region.js';
import Binder from './../../../src/core/classes/Binder.js';

/** @test {Region} */
describe('Region', function() {
  it('should be instantiated', function() {
    expect(Region).to.not.equal(null);
  });
});

/** @test {Region.bind} */
describe('Region.bind(element)', function() {
  let region = new Region(document.body);
  it('should exist', function() {
    expect(region.bind).to.exist;
  });

  it('should throw an error if the element parameter is invalid', function() {
    expect(function() {
      region.bind({});
    }).to.throw('Bind must contain an element');
  });

  it(`should return a chainable Binder object if only an element parameter is
   provided`, function() {
    let ztBound = region.bind(document.body);
    expect(ztBound).to.be.an.instanceof(Binder);
  });

  it(`should return a chainable Binder object that contains all of the
   registered gestures`, function() {
    let ztBound = region.bind(document.body);
    let registeredGestures = Object.keys(region.state.registeredGestures);
    for (let gesture in ztBound) {
      if (gesture !== 'element') {
        expect(registeredGestures).to.include(gesture);
      }
    }
  });
});

/** @test {Region.destroy} */
describe('Region.destroy()', function() {
  let region = new Region(document.body);
  it('should exists', function() {
    expect(region.destroy).to.exist;
  });
});
