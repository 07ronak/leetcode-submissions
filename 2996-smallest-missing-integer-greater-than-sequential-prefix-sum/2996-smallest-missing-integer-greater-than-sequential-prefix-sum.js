/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function (nums) {
    const set = new Set(nums)
    const n = nums.length

    let sum = nums[0]

    for (let i = 1; i < n; i++) {
        if (nums[i - 1] + 1 === nums[i]) {
            sum += nums[i]
        } else{
            break
        }
    }

    if(!set.has(sum)) return sum

    while(set.has(sum)){
        sum++
    }

    return sum
};