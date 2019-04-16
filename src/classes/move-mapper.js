const { MoveError } = require('../errors/move-error');
const { MoveType } = require('./move-type');

class MoveMapper {

  /**
   * Makes a move based on the supplied point (x, y) and the target move type (1-8) and returns the new point result of the move.
   * @param {Point} point Target point
   * @param {MoveType} move Target move type
   * @returns {Point} The new point based on the move type
   */
  static move(point, move) {
    switch (move.type) {
      case MoveType.TYPE_ONE:
        return point.modify(1, 2);
      case MoveType.TYPE_TWO:
        return point.modify(2, 1);
      case MoveType.TYPE_THREE:
        return point.modify(2, -1);
      case MoveType.TYPE_FOUR:
        return point.modify(1, -2);
      case MoveType.TYPE_FIVE:
        return point.modify(-1, -2);
      case MoveType.TYPE_SIX:
        return point.modify(-2, -1);
      case MoveType.TYPE_SEVEN:
        return point.modify(-2, 1);
      case MoveType.TYPE_EIGHT:
        return point.modify(-1, 2);

      default:
        throw new MoveError(`Invalid move type '${move.type}'`);
    }
  }

}

module.exports = { MoveMapper };
