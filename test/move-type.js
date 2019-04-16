const assert = require('assert');
const { MoveType } = require('../src/classes');
const { MoveError } = require('../src/errors/move-error');

describe('Test MoveType', function () {
  it('create with invalid move type', function () {
    assert.throws(() => {
      const moveType = new MoveType(-1);
    }, MoveError);
  });
  it('create with no move type', function () {
    assert.throws(() => {
      const moveType = new MoveType();
    }, MoveError);
  });
  it('create with valid move type', function () {
    const moveType = new MoveType(MoveType.TYPE_ONE);
  });
});
