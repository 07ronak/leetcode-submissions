/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
    let ans = 1
    let streak = 1
    const n = nums.length;

    for (let i = 1; i < n; i++) {
        if (nums[i - 1] < nums[i]) {
            streak++
        } else {
            streak = 1
        }
        ans = Math.max(ans, streak)
    }

    streak = 1

    for (let i = 1; i < n; i++) {
        if (nums[i - 1] > nums[i]) {
            streak++
        } else {
            streak = 1
        }
        ans = Math.max(ans, streak)
    }

    return ans
};