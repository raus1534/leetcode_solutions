/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let intNum = 0;
  for (i = 0; i < s.length; i++) {
    if (roman[s[i]] < roman[s[i + 1]]) {
      intNum -= roman[s[i]];
    } else {
      intNum += roman[s[i]];
    }
  }
  return intNum;
};
// @lc code=end
