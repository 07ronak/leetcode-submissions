/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
    const n = nums.length

    let left = Math.max(...nums)
    let right = nums.reduce((a,b)=>a+b,0)

    while(right>left){
        const mid = left + Math.floor((right-left)/2)

        //ask is it possible to get 'mid' as the minimized largest sum in k splits
        let sum = 0
        let count = 0

        for(let i=0; i<n; i++){
            sum += nums[i]

            if(sum>mid){
                count++
                sum = nums[i]
            }
        }

        if(count+1<=k){
            right = mid
        } else{
            left = mid + 1
        }
    }

    return left
};