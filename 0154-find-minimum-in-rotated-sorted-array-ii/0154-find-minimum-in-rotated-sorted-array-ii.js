/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0
    let right = nums.length-1

    while(right>left){
        const mid = Math.floor((left+right)/2)

        if(nums[right]>nums[mid]){
            right = mid
        } else if(nums[right]<nums[mid]){
            left = mid+1
        } else{
            right--
        }
    }

    return nums[left]
};