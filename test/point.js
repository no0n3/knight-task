const assert = require('assert');
const { Point } = require('../src/classes');

describe('Test Point', function () {
  it('create with non integer x and y params', function () {
    const point = new Point(null, null);
    assert.equal(0, point.x);
    assert.equal(0, point.y);
  });
  it('create with no params', function () {
    const point = new Point();
    assert.equal(0, point.x);
    assert.equal(0, point.y);
  });
  it('create with integer params', function () {
    const x = 4, y = 7;
    const point = new Point(x, y);
    assert.equal(x, point.x);
    assert.equal(y, point.y);
  });

  it('test modify methed x and y with 0', function () {
    const x = 4, y = 7;
    const point = new Point(x, y);
    assert.equal(x, point.x);
    assert.equal(y, point.y);
    let newPoint = point.modify(0, 0);
    assert.equal(x, newPoint.x);
    assert.equal(y, newPoint.y);
  });
  it('test modify methed with invalid integer x', function () {
    const x = 4, y = 7;
    const point = new Point(x, y);
    assert.equal(x, point.x);
    assert.equal(y, point.y);
    let newPoint = point.modify('f', 0);
    assert.equal(x, newPoint.x);
    assert.equal(y, newPoint.y);
  });
  it('test modify methed with invalid integer y', function () {
    const x = 4, y = 7;
    const point = new Point(x, y);
    assert.equal(x, point.x);
    assert.equal(y, point.y);
    let newPoint = point.modify(0, 'f');
    assert.equal(x, newPoint.x);
    assert.equal(y, newPoint.y);
  });
  it('test modify methed with valid integer x', function () {
    const x = 4, y = 7;
    const point = new Point(x, y);
    assert.equal(x, point.x);
    assert.equal(y, point.y);
    let newPoint = point.modify(2, 0);
    assert.equal(x + 2, newPoint.x);
    assert.equal(y, newPoint.y);
  });
  it('test modify methed with valid integer y', function () {
    const x = 4, y = 7;
    const point = new Point(x, y);
    assert.equal(x, point.x);
    assert.equal(y, point.y);
    let newPoint = point.modify(0, 3);
    assert.equal(x, newPoint.x);
    assert.equal(y + 3, newPoint.y);
  });
});
