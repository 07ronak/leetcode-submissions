/**
 * @param {number[]} nums
 * @return {number}
 */
var maxValidSplits = function (nums) {
    const n = nums.length;
    let ans = 0;

    for (let i = -1; i < n; i++) {
        const arr = [];

        for (let j = 0; j < n; j++) {
            if (i === j) continue;
            arr.push(nums[j]);
        }

        const m = arr.length;

        if (m < 2) continue;

        const prefix = new Array(m);
        const suffix = new Array(m);

        prefix[0] = arr[0];

        for (let j = 1; j < m; j++) {
            prefix[j] = gcd(prefix[j - 1], arr[j]);
        }

        suffix[m - 1] = arr[m - 1];

        for (let j = m - 2; j >= 0; j--) {
            suffix[j] = gcd(suffix[j + 1], arr[j]);
        }

        let score = 0;

        for (let j = 0; j < m - 1; j++) {
            if (prefix[j] === suffix[j + 1]) {
                score++;
            }
        }

        ans = Math.max(ans, score);
    }

    return ans;
};

function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return Math.abs(a);
}