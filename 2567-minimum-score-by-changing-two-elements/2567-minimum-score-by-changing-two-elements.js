/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeSum = function (nums) {
    const n = nums.length;
    if (n <= 3) return 0

    nums.sort((a, b) => a - b)
    return Math.min((nums[n - 1] - nums[2]), (nums[n - 3] - nums[0]), (nums[n - 2] - nums[1]))
};