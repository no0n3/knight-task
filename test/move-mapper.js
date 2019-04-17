const assert = require('assert');
const { MoveMapper, Point, MoveType } = require('../src/classes');

describe('Test basic MoveMapper movement types', function () {
  it('test move type 1', function () {
    let point = new Point(0, 0);
    point = MoveMapper.move(point, new MoveType(MoveType.TYPE_ONE))
    assert.equal(1, point.x);
    assert.equal(2, point.y);
  });

  it('test move type 2', function () {
    let point = new Point(0, 0);
    point = MoveMapper.move(point, new MoveType(MoveType.TYPE_TWO))
    assert.equal(2, point.x);
    assert.equal(1, point.y);
  });

  it('test move type 3', function () {
    let point = new Point(0, 0);
    point = MoveMapper.move(point, new MoveType(MoveType.TYPE_THREE))
    assert.equal(2, point.x);
    assert.equal(-1, point.y);
  });

  it('test move type 4', function () {
    let point = new Point(0, 0);
    point = MoveMapper.move(point, new MoveType(MoveType.TYPE_FOUR))
    assert.equal(1, point.x);
    assert.equal(-2, point.y);
  });

  it('test move type 5', function () {
    let point = new Point(0, 0);
    point = MoveMapper.move(point, new MoveType(MoveType.TYPE_FIVE))
    assert.equal(-1, point.x);
    assert.equal(-2, point.y);
  });

  it('test move type 6', function () {
    let point = new Point(0, 0);
    point = MoveMapper.move(point, new MoveType(MoveType.TYPE_SIX))
    assert.equal(-2, point.x);
    assert.equal(-1, point.y);
  });

  it('test move type 7', function () {
    let point = new Point(0, 0);
    point = MoveMapper.move(point, new MoveType(MoveType.TYPE_SEVEN))
    assert.equal(-2, point.x);
    assert.equal(1, point.y);
  });

  it('test move type 8', function () {
    let point = new Point(0, 0);
    point = MoveMapper.move(point, new MoveType(MoveType.TYPE_EIGHT))
    assert.equal(-1, point.x);
    assert.equal(2, point.y);
  });
});

describe('Test MoveMapper movement type combinations', function () {
  it('test move type 111', function () {
    let point = new Point(0, 0);
    for (let moveType of [1, 1, 1]) {
      point = MoveMapper.move(point, new MoveType(moveType));
    }
    assert.equal(3, point.x);
    assert.equal(6, point.y);
  });
  it('test move type 123', function () {
    let point = new Point(0, 0);
    for (let moveType of [1, 2, 3]) {
      point = MoveMapper.move(point, new MoveType(moveType));
    }
    assert.equal(5, point.x);
    assert.equal(2, point.y);
  });
  it('test move type 15', function () {
    let point = new Point(0, 0);
    for (let moveType of [1, 5]) {
      point = MoveMapper.move(point, new MoveType(moveType));
    }
    assert.equal(0, point.x);
    assert.equal(0, point.y);
  });
  it('test move type 56', function () {
    let point = new Point(0, 0);
    for (let moveType of [5, 6]) {
      point = MoveMapper.move(point, new MoveType(moveType));
    }
    assert.equal(-3, point.x);
    assert.equal(-3, point.y);
  });
});

describe('Test MoveMapper movement type combinations with integer move type', function () {
  it('test move type 111', function () {
    let point = new Point(0, 0);
    for (let moveType of [1, 1, 1]) {
      point = MoveMapper.move(point, moveType);
    }
    assert.equal(3, point.x);
    assert.equal(6, point.y);
  });
  it('test move type 123', function () {
    let point = new Point(0, 0);
    for (let moveType of [1, 2, 3]) {
      point = MoveMapper.move(point, moveType);
    }
    assert.equal(5, point.x);
    assert.equal(2, point.y);
  });
  it('test move type 15', function () {
    let point = new Point(0, 0);
    for (let moveType of [1, 5]) {
      point = MoveMapper.move(point, moveType);
    }
    assert.equal(0, point.x);
    assert.equal(0, point.y);
  });
  it('test move type 56', function () {
    let point = new Point(0, 0);
    for (let moveType of [5, 6]) {
      point = MoveMapper.move(point, moveType);
    }
    assert.equal(-3, point.x);
    assert.equal(-3, point.y);
  });
});
