const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(/* s1, s2 */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
function getCommonCharacterCount(first, sec) {
  let countList = 0;
  let arr = first.split('');

  for (let i = 0; i < sec.length; i++) {
    let index = arr.indexOf(sec[i]);
    if (index >= 0) {
      countList++;
      arr.splice(index, 1);
    }
  }
  return countList;
}
getCommonCharacterCount('aabcc','adcaa')
module.exports = {
  getCommonCharacterCount
};
