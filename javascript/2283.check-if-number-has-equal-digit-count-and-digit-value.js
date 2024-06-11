/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
  const arr = num.split("");
  for (let i = 0; i < arr.length; i++) {
    let count = arr.filter((n) => n == i).length;
    if (Number(arr[i]) !== count) return false;
  }
  return true;
};
