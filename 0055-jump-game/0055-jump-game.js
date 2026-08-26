/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    const n = nums.length
    let maxReach = 0

    for (let i = 0; i < n; i++) {
        if (i > maxReach) {
            return false
        }

        maxReach = Math.max(maxReach, nums[i] + i)

        if (maxReach >= n - 1) return true
    }
};