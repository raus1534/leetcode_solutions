/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let index = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
};
// @lc code=end
