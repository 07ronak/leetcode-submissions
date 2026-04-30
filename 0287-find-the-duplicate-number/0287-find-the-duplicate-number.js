/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let fast = 0
    let slow = 0

    while(true){
        slow = nums[slow]
        fast = nums[nums[fast]]
        if(slow===fast){
            break
        }
    }

    fast = 0

    while(true){
        if(slow===fast){
            return slow
        }
        slow = nums[slow]
        fast = nums[fast]
    }
};