const { MoveError } = require('../errors/move-error');

class MoveType {

  constructor(type) {
    this.type = type;

    if (!this.isValidMove()) {
      throw new MoveError(`Invalid move type '${type}'`);
    }
  }

  /**
   * Checks if the current move type is valid. A move type can be between 1 and 8.
   * @returns {boolean} TRUE if the current move type is valid, FALSE otherwise
   */
  isValidMove() {
    if (this.type >= MoveType.TYPE_ONE && this.type <= MoveType.TYPE_EIGHT) {
      return true;
    }

    return false;
  }
}
MoveType.TYPE_ONE = 1;
MoveType.TYPE_TWO = 2;
MoveType.TYPE_THREE = 3;
MoveType.TYPE_FOUR = 4;
MoveType.TYPE_FIVE = 5;
MoveType.TYPE_SIX = 6;
MoveType.TYPE_SEVEN = 7;
MoveType.TYPE_EIGHT = 8;

module.exports = { MoveType };
