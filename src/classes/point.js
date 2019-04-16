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
}

module.exports = { Point };
