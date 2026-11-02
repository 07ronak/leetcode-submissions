/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
    const n = nums.length;
    nums.sort((a, b) => a - b);

    const mid = Math.floor((n - 1) / 2);
    const median = n & 1 ? nums[mid] : Math.floor((nums[mid] + nums[mid + 1]) / 2);

    let sum = 0

    for (let i = 0; i < n; i++) {
        sum += Math.abs(median - nums[i])
    }

    return sum
};