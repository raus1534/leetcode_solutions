/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    x = x.toString();
    let j = x.length - 1;
    for (i = 0; i < x.length / 2; i++) {
      console.log(x[i], x[j]);
      if (x[i] != x[j]) return false;
      j--;
    }
    return true;
};
// @lc code=end

