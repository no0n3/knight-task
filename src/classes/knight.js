const { Point } = require('./point');
const { MoveMapper } = require('./move-mapper');

class Knight {
  constructor(point) {
    this.point = this.isValidPoint(point) ? point : new Point(0, 0);
  }

  /**
   * Checks if the given param is a valid point object. A param is valid point object when it is an instance of Point.
   * @param {*} point the param to be checked
   * @returns {boolean} TRUE if the param is a valid point object, FALSE otherwise
   */
  isValidPoint(point) {
    return point instanceof Point;
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
