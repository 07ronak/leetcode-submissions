/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minRemoval = function(nums, k) {
    const n = nums.length
    let max = 1

    nums.sort((a,b)=>a-b)

    if(nums[0]*k >= nums[n-1]) return 0

    for(let size = 2; size<=n; size++){
        for(let left = 0; left< n - size +1; left++){
            if(nums[left]*k >= nums[left+size-1]){
                max = size
                break
            }
        }
        if(max!==size){
            break
        }
    }

    return n - max
};