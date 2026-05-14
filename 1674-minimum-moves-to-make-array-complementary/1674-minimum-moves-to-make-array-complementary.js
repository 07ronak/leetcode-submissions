/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var minMoves = function(nums, limit) {
    const max = 2*limit
    const n = nums.length
    const diff = new Array(max+2).fill(0)

    for(let i=0; i<n/2; i++){
        const a = Math.min(nums[i],nums[n-1-i])
        const b = Math.max(nums[i],nums[n-1-i])

        diff[2] += 2
        diff[a+1] -= 1
        diff[a+b] -=1
        diff[a+b+1] += 1
        diff[b+limit+1] +=1
    }

    let minOps = n
    let curr = 0

    for(let i=2; i<=max; i++){
        curr += diff[i]
        minOps = Math.min(minOps,curr)
    }

    return minOps
};