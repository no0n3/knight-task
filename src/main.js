const { Knight, Point, MoveType } = require('./classes');
const { getMoves } = require('./moves-extractor');
const { Solution } = require('./solution');

main();

/**
 * Main app function
 */
async function main() {
  const moves = await getMoves(); // moves integer array extracted from data/moves file.
  const solution = new Solution();

  const finalPosition = solution.findFinalPosition(moves);
  const furthestPoint = solution.findFurthestPoint(moves);
  const duplicateXY = solution.findDuplicateXY(moves);

  console.log(`#1 Current position of the knight after all moves have been applied: x=${finalPosition.x}, y=${finalPosition.y}`);
  console.log(`#2 furthest point that the knight has ever been: x=${furthestPoint.x}, y=${furthestPoint.y}`);
  console.log(`#3 Total unique equal x and y: ${duplicateXY.length}, Equal x and y: ${pointArrayToStr(duplicateXY)}`);
}

function pointArrayToStr(points) {
  let result = [];
  for (const i of points) {
    result.push(i.toString());
  }

  return result.join(', ');
}
