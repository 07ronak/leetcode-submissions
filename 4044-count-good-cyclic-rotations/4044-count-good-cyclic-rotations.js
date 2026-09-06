/**
 * @param {number[]} nums
 * @return {number}
 */
var countGoodRotations = function (nums) {
    const n = nums.length
    const half = n / 2
    const total = nums.reduce((a, b) => a + b, 0)

    let sum = 0
    for (let i = 0; i < half; i++) sum += nums[i]

    let ans = 0

    for (let i = 0; i < n; i++) {
        if (2 * sum > total) ans++
        
        sum += nums[(i + half) % n] - nums[i]
    }

    return ans
}