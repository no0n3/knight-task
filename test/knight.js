const assert = require('assert');
const { Knight, Point, MoveType } = require('../src/classes');

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

describe('Test Knight.move method with movement type combinations', function () {
  it('test move type 111', function () {
    const knight = new Knight();
    for (let moveType of [1, 1, 1]) {
      knight.move(new MoveType(moveType));
    }
    assert.equal(3, knight.point.x);
    assert.equal(6, knight.point.y);
  });
  it('test move type 123', function () {
    const knight = new Knight();
    for (let moveType of [1, 2, 3]) {
      knight.move(new MoveType(moveType));
    }
    assert.equal(5, knight.point.x);
    assert.equal(2, knight.point.y);
  });
  it('test move type 15', function () {
    const knight = new Knight();
    for (let moveType of [1, 5]) {
      knight.move(new MoveType(moveType));
    }
    assert.equal(0, knight.point.x);
    assert.equal(0, knight.point.y);
  });
  it('test move type 56', function () {
    const knight = new Knight();
    for (let moveType of [5, 6]) {
      knight.move(new MoveType(moveType));
    }
    assert.equal(-3, knight.point.x);
    assert.equal(-3, knight.point.y);
  });
});
