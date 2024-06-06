/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let revNum = (x + "").split("").reverse().join("");
  if (revNum.endsWith("-")) {
    revNum = "-" + parseInt(revNum);
  }
  if (revNum > Math.pow(2, 31) - 1 || revNum < -Math.pow(2, 31)) {
    return 0;
  }
  return revNum;
};
