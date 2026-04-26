/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findValidElements = function(nums) {
    if(nums.length<3) return nums
    const n = nums.length

    let ans = [nums[0]]

    let suf = new Array(n).fill(0)

    suf[n-2] = nums[n-1]

    for(let i=n-3; i>=0; i--){
        suf[i] = Math.max(suf[i+1],nums[i+1])
    }

    //console.log(suf)
    
    let max = nums[0]
    for(let i=1; i<n-1; i++){
        if((nums[i]>max) || (nums[i]>suf[i])){
            ans.push(nums[i])
        }
        max = Math.max(max,nums[i])
    }

    ans.push(nums[n-1])

    return ans
};