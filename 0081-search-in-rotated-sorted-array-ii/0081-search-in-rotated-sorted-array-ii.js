/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let left =0
    let right= nums.length - 1

    while(right>=left){
        const mid = Math.floor((left+right)/2)

        if(nums[mid]===target) return true

        if(nums[right]>nums[mid]){
            //right part is sorted
            if(target > nums[mid] && target <= nums[right]){
                left = mid + 1
            } else{
                right = mid - 1
            }
        } else if(nums[right]===nums[mid]){
            right--
        } else{
            //left part is sorted
            if(target >= nums[left] && target < nums[mid]){
                right = mid - 1
            } else{
                left = mid + 1
            }
        }
    }

    return false
};