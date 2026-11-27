/**
 * @param {number[][]} items
 * @param {number} budget
 * @return {number}
 */
var maximumSaleItems = function (items, budget) {
    const n = items.length;
    const min = Math.min(...items.map(x => x[1]));

    const dp = new Array(budget + 1).fill(0);

    // Unlimited ordinary purchases of the cheapest item
    for (let b = 0; b <= budget; b++) {
        dp[b] = Math.floor(b / min);
    }

    for (const [i, price] of items) {
        if (price > budget) continue;

        let sum = 0;

        for (const [j, _] of items) {
            if (j % i === 0) {
                sum++;
            }
        }

        // Skip if ordinary purchases are equally good or better
        if (sum <= Math.floor(price / min)) continue;

        // 0/1 Knapsack
        for (let b = budget; b >= price; b--) {
            dp[b] = Math.max(
                dp[b],
                dp[b - price] + sum
            );
        }
    }

    return dp[budget];
};