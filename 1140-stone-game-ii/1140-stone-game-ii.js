var stoneGameII = function (piles) {
    const n = piles.length;

    const suffixSum = [...piles];

    for (let i = n - 2; i >= 0; i--) {
        suffixSum[i] += suffixSum[i + 1];
    }

    const memo = Array.from({ length: n }, () => Array(n).fill(0));

    function maxStones(maxTillNow, currIndex) {
        if (currIndex + 2 * maxTillNow >= n) {
            return suffixSum[currIndex];
        }

        if (memo[currIndex][maxTillNow] > 0) {
            return memo[currIndex][maxTillNow];
        }

        let res = Infinity;
        for (let i = 1; i <= 2 * maxTillNow; i++) {
            res = Math.min(res, maxStones(Math.max(i, maxTillNow), currIndex + i));
        }

        memo[currIndex][maxTillNow] = suffixSum[currIndex] - res;

        return memo[currIndex][maxTillNow];
    }

    return maxStones(1, 0);
};