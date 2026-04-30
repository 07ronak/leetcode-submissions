/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const n = nums.length

    if(n===1) return
    if(n===2){
        nums.reverse()
        return
    }

    let i = n-2

    while(i>=0 && nums[i]>=nums[i+1]){
        i--
    }

    if(i>=0){
        let j = nums.length-1
        while(nums[j]<=nums[i]){
            j--
        }
        [nums[j],nums[i]] = [nums[i],nums[j]]
    }

    i = i+1
    let right = n-1

    while(right>i){
        let temp = nums[right]
        nums[right] = nums[i]
        nums[i] = temp
        right--
        i++
    }
};