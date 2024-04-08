/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const length = nums.length;
  const arr = new Array(length + 1).fill(false);
  for (i = 0; i < length; i++) {
    arr[nums[i]] = true;
  }
  for (i = 0; i < arr.length; i++) {
    if (!arr[i]) return i;
  }
};
// @lc code=end
