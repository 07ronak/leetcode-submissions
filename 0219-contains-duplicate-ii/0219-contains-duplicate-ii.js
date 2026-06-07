/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const n = nums.length

    let set = new Set()

    for(let i=0; i<n; i++){
        //remove older val
        if(i>k){
            set.delete(nums[i-k-1])
        }

        if(set.has(nums[i])) return true

        set.add(nums[i])
    }

    return false
};