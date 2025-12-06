/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let heatMap = new Map()
    for (let n of nums) {
        heatMap.set(n, (heatMap.get(n) || 0) + 1);
    }

    let arr = Array.from(heatMap.entries()).sort((a, b) => b[1] - a[1])

    return arr.slice(0, k).map(([num, freq]) => num);
};
