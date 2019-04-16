const fs = require('fs');

const fileName = './data/moves';

/**
 * Reads moves file and returns promise with resolved file content.
 */
async function readMovesFile() {
  return new Promise((resolve) => {
    fs.readFile(fileName, 'utf8', (err, contents) => {
      resolve(contents);
    });
  });
}

/**
 * Returns a promise that resolves to a array with all moves as an integer array.
 */
async function getMoves() {
  const movesStr = await readMovesFile();
  const moves = movesStr.split('');
  for (let i = 0; i < moves.length; i++) {
    moves[i] = parseInt(moves[i]);
  }

  return moves;
}

module.exports = {
  getMoves
};
