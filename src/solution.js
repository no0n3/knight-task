const { Knight, Point, MoveType } = require('./classes')

class Solution {

  findFinalPosition(moves) {
    const knight = new Knight();
    for (const move of moves) {
      this.applyMove(knight, move);
    }

    return knight.point;
  }

  findFurthestPoint(moves) {
    const knight = new Knight();
    let furthestPoint = new Point();
    let furthestDist = 0;
    for (const move of moves) {
      this.applyMove(knight, move);
      const currentDistance = this.calculateDistFromCenter(knight.point.x, knight.point.y);
      if (currentDistance > furthestDist) {
        furthestDist = currentDistance;
        furthestPoint = new Point(knight.point.x, knight.point.y);
      }
    }

    return furthestPoint;
  }

  findDuplicateXY(moves) {
    const knight = new Knight();
    const equalPoints = [];
    for (const move of moves) {
      this.applyMove(knight, move);
      if (0 !== knight.point.x && knight.point.x === knight.point.y && !this.containsPoint(equalPoints, knight.point)) {
        equalPoints.push(knight.point);
      }
    }

    return equalPoints;
  }

  containsPoint(arr, point) {
    for (let i of arr) {
      if (i.equals(point)) {
        return true;
      }
    }

    return false;
  }

  pointArrayToStr(points) {
    let result = [];
    for (const i of points) {
      result.push(i.toString());
    }

    return result.join(', ');
  }

  /**
   * Applies the target move type to the knight.
   * @param {Knight} knight 
   * @param {integer} moveNumber 
   */
  applyMove(knight, moveNumber) {
    const moveType = new MoveType(moveNumber);
    knight.move(moveType);
  }

  /**
   * Returns the distance of the target x and y from the center (0, 0) of the axis
   * @param {integer} x 
   * @param {integer} y 
   * @returns {integer} The distance from (0, 0) to (x, y)
   */
  calculateDistFromCenter(x, y) {
    return Math.sqrt(Math.pow(0 - x, 2) + Math.pow(0 - y, 2));
  }
}

module.exports = { Solution };
