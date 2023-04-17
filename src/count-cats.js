const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(countCats) {
  let count=0;
  for(let item of countCats){
    for(let cats of item){
      if(cats=='^^'){
        count++
      }
    }
  }
  return count;

}
countCats([
  [0, 1, '^^'],
  [0, '^^', 2],
  ['^^', 1, 2]
 ]);

module.exports = {
  countCats
};
