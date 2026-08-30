/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function (nums) {
    const n = nums.length
    if (n === 1) return 1
    let max = -Infinity
    let min = Infinity
    let imax = -1
    let imin = -1

    for (let i = 0; i < n; i++) {
        if (nums[i] > max) {
            max = nums[i]
            imax = i
        }

        if (nums[i] < min) {
            min = nums[i]
            imin = i
        }
    }


    const front = Math.max(imax + 1, imin + 1)
    const back = Math.max(n - imax, n - imin)
    const both = Math.min(imax + 1, n - imax) + Math.min(imin + 1, n - imin)

    return Math.min(front, back, both)
};