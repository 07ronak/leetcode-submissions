/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let ans = 0;
    const n = nums.length;

    for(let i = 0; i < n - 1; i++) {
        if(nums[i] > nums[i + 1]) {
            ans += nums[i] - nums[i + 1];
        }
    }

    return ans;
};