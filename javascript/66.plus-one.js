/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    for (i = digits.length - 1; i >= 0; i--) {
        if (digits[i] != 9) {
            ++digits[i]
            return digits
        }
        digits[i] = 0
    }
    if (digits[0] == 0) {
        for (i = digits.length; i > 0; i--) {
            digits[i] = digits[i - 1]
        }
    }
    digits[0] = 1
    return digits
};
// @lc code=end

