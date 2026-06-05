/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function(nums) {
    nums.sort((a,b)=>a-b)
    const n = nums.length
    let factor = 0
    let count =0

    for(let i=1; i<n; i++){
        if (nums[i] !== nums[i - 1]) {
            factor++;
        }
        count += factor;
    }

    return count
};