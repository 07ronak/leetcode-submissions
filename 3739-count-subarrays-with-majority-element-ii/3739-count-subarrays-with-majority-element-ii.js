/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function(nums, target) {
    let prefix = 0
    let less = 0
    let res = 0

    let map = new Map([[0,1]])

    for(let num of nums){
        if(num===target){
            less += map.get(prefix) || 0
            prefix++
        } else{
            less -= map.get(prefix-1) || 0
            prefix--
        }

        res += less
        map.set(prefix,(map.get(prefix)||0)+1)
    }

    return res
};