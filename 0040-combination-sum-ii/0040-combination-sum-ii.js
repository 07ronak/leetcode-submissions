/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(nums, target) {
    const res = []
    const n = nums.length

    nums.sort((a,b)=>a-b)

    function bt(sum,start,arr){
        if(sum===target){
            res.push([...arr])
            return
        }

        if(sum>target){
            return
        }

        for(let i=start; i<n; i++){
            if(i>start && nums[i]===nums[i-1]){
                continue
            }
            arr.push(nums[i])
            bt(sum+nums[i],i+1,arr)
            arr.pop()
        }
    }

    bt(0,0,[])
    return res
};