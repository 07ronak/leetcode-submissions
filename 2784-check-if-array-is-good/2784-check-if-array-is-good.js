/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    const n = nums.length

    nums.sort((a,b)=>a-b)

    for(let i=1; i<n; i++){
        if(nums[i-1]!==i) return false
    }

    if(nums[n-1]!==n-1) return false

    return true
};