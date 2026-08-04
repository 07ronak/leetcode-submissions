/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    let set = new Set()
    let min = Infinity
    let max = -Infinity

    for(const num of nums){
        min = Math.min(min,num)
        max = Math.max(max,num)
        set.add(num)
    }

    min++
    const ans = []

    while(max>min){
        if(!set.has(min)){
            ans.push(min)
        }
        min++
    }

    return ans
};