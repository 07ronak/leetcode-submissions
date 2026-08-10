/**
 * @param {number} n
 * @return {boolean}
 */
var winnerSquareGame = function (n) {
    const dp = new Uint8Array(n + 1).fill(0)

    for (let i = 1; i <= n; i++) {
        for (let s = 1; s * s <= i; s++) {
            if (dp[i - s * s] === 0) {
                dp[i] = 1
                break
            }
        }
    }

    return dp[n] === 1
};