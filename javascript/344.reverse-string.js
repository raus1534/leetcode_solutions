/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let leftPointer = 0;
  let rightPointer = s.length - 1;

  while (leftPointer <= rightPointer) {
    let temp = s[leftPointer];
    s[leftPointer] = s[rightPointer];
    s[rightPointer] = temp;
    leftPointer++;
    rightPointer--;
  }
};
// @lc code=end
