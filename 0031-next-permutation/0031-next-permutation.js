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

    if(i===-1){
        nums.reverse()
        return
    }

    let j = n-1
    while(nums[j]<=nums[i]){
        j--
    }
    [nums[j],nums[i]] = [nums[i],nums[j]]

    i = i+1
    j = n-1

    while(j>i){
        let temp = nums[j]
        nums[j] = nums[i]
        nums[i] = temp
        j--
        i++
    }
};