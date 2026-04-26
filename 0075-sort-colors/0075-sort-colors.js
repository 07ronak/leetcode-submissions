/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const n = nums.length

    let left = 0
    let right = n-1

    for(let i=0; i<=right; i++){
        if(nums[i]===0){
            [nums[left],nums[i]] = [nums[i],nums[left]]
            left++
        }
        if(nums[i]===2){
            [nums[right],nums[i]] = [nums[i],nums[right]]
            right--
            i--
        }
    }
};