/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    newArr[i] = fn(arr[i], i);
  }
  return newArr;
};
