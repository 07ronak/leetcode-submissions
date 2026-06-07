/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    const n = nums.length
    nums.sort((a,b)=>a-b)
    let closest = Infinity
    let ans;

    for(let i=0; i<n; i++){

        let j = i+1
        let k = n-1

        while(k>j){
            let sum = nums[i]+nums[j]+nums[k]
            const diff = Math.abs(target-sum)

            if(diff===0){
                return target
            }

            if(diff<closest){
                closest = diff
                ans = sum    
            }

            if(sum>target){
                k--
            } else{
                j++
            }
        }
    }

    return ans
};