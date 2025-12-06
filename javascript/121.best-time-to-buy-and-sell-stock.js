/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let price of prices) {
        minPrice = Math.min(price, minPrice);
        profit = price - minPrice;
        maxProfit = Math.max(profit, maxProfit);
    }
    return maxProfit;
};
