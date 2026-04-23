/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const n = nums.length
    let min = n+1

    for(let i=0; i<n; i++){
        if(nums[i]<0){
            nums[i] = 0
        }
        if(nums[i]>0){
            min = Math.min(min,nums[i])
        }
    }
    if(min>1) return 1

    for(let i=0; i<n; i++){
        let idx = Math.abs(nums[i]) - 1
    
        if(idx>=0 && idx<n){
            if(nums[idx]===0){
                nums[idx] = -1 * min
            } else if(nums[idx]>0){
                nums[idx] *= -1 
            }
        }
    }
    //console.log(nums)

    for(let i=1; i<=n; i++){
        if(nums[i-1]>=0) return i
    }
    return n + 1
};