/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function(nums) {
    const n = nums.length
    const sum = nums.reduce((a,b)=>a+b,0)
    
    let first = 0

    for(let i=0; i<n; i++){
        first += (nums[i]) * i
    }
    let max = first

    for(let i=n-1; i>=1; i--){
        first = first + sum - (n * nums[i])
        max = Math.max(max, first)
    }
    
    return max
};