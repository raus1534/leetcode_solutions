/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let maxSum = nums[0];
    let total = 0;
    for (let n of nums) {
        total = total < 0 ? 0 : total;
        total += n;
        maxSum = Math.max(total, maxSum)
    }
    return maxSum;

};
