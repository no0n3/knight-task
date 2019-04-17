const assert = require('assert');
const { Knight } = require('../src/classes');
const { Solution } = require('../src/solution');
const { MoveError } = require('../src/errors/move-error');

const validMoves = [1, 2, 4, 5];
const zeroMoves = [];
const invalidMoves = [1, 2, 9, 7, 4];

const solution = new Solution();

describe('Test Solutuion findFurthestPoint', function () {
  it('test with valid moves', function () {
    const point = solution.findFinalPosition(validMoves);

    assert.equal(point.x, 3);
    assert.equal(point.y, -1);
  });
  it('test with zero moves', function () {
    const point = solution.findFinalPosition(zeroMoves);

    assert.equal(point.x, 0);
    assert.equal(point.y, 0);
  });
  it('test with invalid moves', function () {
    assert.throws(() => {
      solution.findFinalPosition(invalidMoves);
    }, MoveError);
  });
});

describe('Test Solutuion findFurthestPoint', function () {
  it('test with valid moves', function () {
    const point = solution.findFurthestPoint(validMoves);

    assert.equal(point.x, 3);
    assert.equal(point.y, 3);
  });
  it('test with zero moves', function () {
    const point = solution.findFurthestPoint(zeroMoves);

    assert.equal(point.x, 0);
    assert.equal(point.y, 0);
  });
  it('test with invalid moves', function () {
    assert.throws(() => {
      solution.findFurthestPoint(invalidMoves);
    }, MoveError);
  });
});

describe('Test Solutuion findDuplicateXY', function () {
  it('test with valid moves', function () {
    const points = solution.findDuplicateXY(validMoves);

    assert.equal(points.length, 1);
    assert.equal(points[0].x, 3);
    assert.equal(points[0].y, 3);
  });
  it('test with zero moves', function () {
    const points = solution.findDuplicateXY(zeroMoves);

    assert.equal(points.length, 0);
  });
  it('test with invalid moves', function () {
    assert.throws(() => {
      solution.findDuplicateXY(invalidMoves);
    }, MoveError);
  });
});
