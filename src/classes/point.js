const { isInteger } = require('../common');

class Point {
  constructor(x, y) {
    this.x = this.getValidatedInt(x);
    this.y = this.getValidatedInt(y);
  }

  /**
   * Gets a new point based on the curent point x and y with the supplied x and y change values.
   * @param {integer} xd X axis change
   * @param {integer} yd Y axis change
   * @returns {Point} A new point created from the current point coordinates changed by the supplied x and y.
   */
  modify(xd, yd) {
    const newPoint = new Point(this.x + this.getValidatedInt(xd), this.y + this.getValidatedInt(yd));

    return newPoint;
  }

  /**
   * Validates the number and returns it. If the supplied parameter is not a valid integer then 0 is returned.
   * @param {integer} number target number
   */
  getValidatedInt(number) {
    return isInteger(number) ? number : 0;
  }

  /**
   * Chechs if the current point object is equal to the supplied point
   * @param {Point} point 
   * @returns {boolean} TRUE if the points are equal, FALSE otherwise
   */
  equals(point) {
    if (!(point instanceof Point)) {
      return false;
    }

    if (this.x !== point.x) {
      return false;
    }
    if (this.y !== point.y) {
      return false;
    }

    return true;
  }

  toString() {
    return `(x=${this.x}, y=${this.y})`;
  }
}

module.exports = { Point };
