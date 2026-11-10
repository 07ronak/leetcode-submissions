/**
 * @param {number} n
 * @param {number[]} costs
 * @return {number}
 */
var climbStairs = function (n, costs) {
    const dp = new Array(n + 1).fill(0)
    dp[1] = 1 + costs[0]

    for (let i = 1; i < n; i++) {
        let min = Infinity;

        if (i > 1) {
            min = Math.min(min, costs[i] + 9 + dp[i - 2])
        }

        min = Math.min(min, costs[i] + 4 + dp[i - 1], costs[i] + 1 + dp[i])

        dp[i + 1] = min
    }

    return dp[n]
};