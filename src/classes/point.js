class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * Gets a new point based on the curent point x and y with the supplied x and y change values.
   * @param {integer} xd X axis change
   * @param {integer} yd Y axis change
   * @returns {Point} A new point created from the current point coordinates changed by the supplied x and y.
   */
  modify(xd, yd) {
    const newPoint = new Point(this.x + xd, this.y + yd);

    return newPoint;
  }
}

module.exports = { Point };
