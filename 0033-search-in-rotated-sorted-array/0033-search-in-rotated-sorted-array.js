/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length-1

    while(right>=left){
        const mid = Math.floor((left+right)/2)
        const val = nums[mid]

        if(val===target) return mid

        if(nums[right]>val){
            //right part is sorted
            if(target>val && target<=nums[right]){
                left = mid + 1
            } else{
                right = mid - 1
            }
        } else{
            //left part is sorted
            if(target>=nums[left] && target<nums[mid]){
                right = mid -1
            } else{
                left = mid + 1
            }
        }
    }

    return -1
};