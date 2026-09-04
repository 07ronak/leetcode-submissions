/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minBuy = prices[0]
    const n = prices.length
    let max = 0

    for(let i=1; i<n; i++){
        let val = prices[i]
        max = Math.max(max, val-minBuy)
        minBuy = Math.min(minBuy, val)
    }

    return max
};