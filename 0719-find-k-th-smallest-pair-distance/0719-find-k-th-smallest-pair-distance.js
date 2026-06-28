/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
    const n = nums.length
    nums.sort((a,b)=>a-b)

    let right = Math.max(...nums)
    let left = 0


    while(right>left){
        const mid = left + Math.floor((right-left)/2)

        let l = 0
        let count = 0

        for(let r =1; r<n; r++){
            while (nums[r] - nums[l] > mid) {
                l++;
            }
            count += r - l;
        }

        if(count<k){
            left = mid + 1
        } else{
            right = mid
        }
    }

    return left
};