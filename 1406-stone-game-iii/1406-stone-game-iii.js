const s = ["Bob", "Tie", "Alice"];
const stoneGameIII = A => {
    const n = A.length;
    const dp = [0, 0, 0, 0];

    for (let i = n - 1; i >= 0; i--) {
        dp[i & 3] = -5e7;
        let sum = 0;

        for (let j = 1; j <= 3 && i + j <= n; j++) {
            sum += A[i + j - 1];
            dp[i & 3] = Math.max(dp[i & 3], sum - dp[(i + j) & 3]);
        }
    }

    return s[(dp[0] > 0) - (dp[0] < 0) + 1];
};