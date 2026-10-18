
/**
 * @param {number[]} nums
 * @return {number}
 */
var numOfWays = function(nums) {
    const mod = 1000000007n;
    const n = nums.length;

    // Build Pascal's Triangle
    const table = Array.from(
        { length: n },
        () => Array(n).fill(0n)
    );

    for (let i = 0; i < n; i++) {
        table[i][0] = 1n;
        table[i][i] = 1n;
    }

    for (let i = 2; i < n; i++) {
        for (let j = 1; j < i; j++) {
            table[i][j] =
                (table[i - 1][j - 1] + table[i - 1][j]) % mod;
        }
    }

    function dfs(arr) {
        const m = arr.length;

        if (m < 3) return 1n;

        const left = [];
        const right = [];

        for (let i = 1; i < m; i++) {
            if (arr[i] < arr[0]) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }

        const leftWays = dfs(left);
        const rightWays = dfs(right);

        return (leftWays * rightWays *
            table[m - 1][left.length]) % mod;
    }

    return Number((dfs(nums) - 1n + mod) % mod);
};
