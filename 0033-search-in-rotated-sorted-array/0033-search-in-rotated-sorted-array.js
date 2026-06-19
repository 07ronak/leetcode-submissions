/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    
    while(right>=left){
        
        if(nums[left]===target){
            return left
        }
        
        if(nums[right]===target){
            return right
        }
        
        const mid = Math.floor((left+right)/2)
        
        if(nums[mid]===target){
            return mid
        }
        
        if(nums[mid]<nums[right]){
            //right half is sorted
            if(target<nums[right] && target>nums[mid]){
                left = mid + 1
            } else{
                right = mid - 1
            }
        } else{
            //left half is sorted
            if(target>nums[left] && target<nums[mid]){
                right = mid - 1
            } else {
                left = mid +1
            }
            
        }
    }
    
    return -1
};