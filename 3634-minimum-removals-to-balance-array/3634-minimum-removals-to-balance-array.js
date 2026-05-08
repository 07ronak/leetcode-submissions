/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minRemoval = function(nums, k) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    
    if(nums[0]*k >= nums[n-1]) return 0

    let i = 0;
    for (let j = 1; j < n; j++){
        if (i <= j && nums[j] > nums[i] * k){
            i++;
        }
    }
    return i;
};