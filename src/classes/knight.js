const { Point } = require('./point');
const { MoveMapper } = require('./move-mapper');

class Knight {
  constructor(point) {
    this.point = point || new Point(0, 0);
  }

  /**
   * Makes a move and changes the current point coordinates based on the supplied move type
   * @param {MoveType} move 
   */
  move(move) {
    this.point = MoveMapper.move(this.point, move);
  }
}

module.exports = { Knight };
