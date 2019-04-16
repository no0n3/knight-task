const assert = require('assert');
const { Knight, Point } = require('../src/classes');

describe('Test Knight', function () {
  it('create with null param', function () {
    const knight = new Knight(null);
    assert.equal('Point', knight.point.constructor.name);
    assert.equal(0, knight.point.x);
    assert.equal(0, knight.point.y);
  });
  it('create with no param', function () {
    const knight = new Knight();
    assert.equal('Point', knight.point.constructor.name);
    assert.equal(0, knight.point.x);
    assert.equal(0, knight.point.y);
  });
  it('create with non Point param', function () {
    const knight = new Knight(2);
    assert.equal('Point', knight.point.constructor.name);
    assert.equal(0, knight.point.x);
    assert.equal(0, knight.point.y);
  });

  it('test isValidPoint with invalid points', function () {
    const knight = new Knight(2);
    assert.equal(false, knight.isValidPoint(8));
    assert.equal(false, knight.isValidPoint('x'));
  });
  it('test isValidPoint with valid point', function () {
    const knight = new Knight(2);
    assert.equal(true, knight.isValidPoint(new Point));
  });
});