/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    const n = nums.length
    if(n===1) return 0

    if(nums[0]>nums[1]) return 0
    if(nums[n-1]>nums[n-2]) return (n-1)

    let left = 0
    let right = n-1

    while(right>=left){
        const mid = left + Math.floor((right-left)/2)

        if(nums[mid] < nums[mid+1]){
            left = mid + 1
        } else if(nums[mid-1] > nums[mid]){
            right = mid - 1
        } else{
            return mid
        }
    }
};