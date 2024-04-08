/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (num, target) => {
  for (i = 0; i < num.length; i++) {
    for (j = i + 1; j < num.length; j++) {
      if (num[i] + num[j] == target) return [i, j];
    }
  }
  return [];
};
// @lc code=end
