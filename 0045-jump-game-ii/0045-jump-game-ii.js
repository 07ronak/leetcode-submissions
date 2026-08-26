/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    const n = nums.length

    let l = 0
    let r = 0
    let res = 0

    while (r < n - 1) {
        let farthest = 0
        for (let i = l; i <= r; i++) {
            farthest = Math.max(farthest, i + nums[i])
        }
        l = r + 1
        r = farthest
        res++
    }

    return res
};