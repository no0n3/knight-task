const { Knight, MoveType } = require('./classes');
const { getMoves } = require('./moves-extractor');

main();

/**
 * Main app function
 */
async function main() {
  const moves = await getMoves(); // moves integer array extracted from data/moves file.
  const knight = new Knight(); // knight object with default 0, 0 position
  const equalXY = [];
  let furthestPoints = { x: 0, y: 0 };
  let furthestDist = 0;

  console.log('Appling moves...')

  for (const move of moves) {
    applyMove(knight, move);

    const currentDistance = calculateDistFromCenter(knight.point.x, knight.point.y);
    if (currentDistance > furthestDist) {
      furthestDist = currentDistance;
      furthestPoints = { x: knight.point.x, y: knight.point.y };
    }

    if (0 !== knight.point.x && knight.point.x === knight.point.y && !arrayContains(equalXY, knight.point.x)) {
      equalXY.push(knight.point.x);
    }
  }

  console.log('All moves have been applied.')
  console.log(`#1 Current position of the knight after all moves have been applied: x=${knight.point.x}, y=${knight.point.y}`);
  console.log(`#2 furthest point that the knight has ever been: x=${furthestPoints.x}, y=${furthestPoints.y}`);
  console.log('#3 Total unique equal x and y:', equalXY.length, 'Equal x and y: ', JSON.stringify(equalXY));
}

/**
 * Returns the distance of the target x and y from the center (0, 0) of the axis
 * @param {integer} x 
 * @param {integer} y 
 * @returns {integer} The distance from (0, 0) to (x, y)
 */
function calculateDistFromCenter(x, y) {
  return Math.sqrt(Math.pow(0 - x, 2) + Math.pow(0 - y, 2));
}

/**
 * Checks if the array contains the target value.
 * @param {array} arr 
 * @param {*} value 
 * @returns {boolean} TRUE if the array contains the value, FALSE otherwise
 */
function arrayContains(arr, value) {
  return -1 !== arr.indexOf(value);
}

/**
 * Applies the target move type to the knight.
 * @param {Knight} knight 
 * @param {integer} moveNumber 
 */
function applyMove(knight, moveNumber) {
  const moveType = new MoveType(moveNumber);
  knight.move(moveType);
}
