/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function (nums, k) {
    const n = nums.length
    if (k === n) {
        return Math.max(...nums)
    }

    if (k === 1) {
        const fm = new Map()
        for (const n of nums) {
            fm.set(n, (fm.get(n) || 0) + 1)
        }
        let ans = -1
        for (const [num, freq] of fm) {
            if (freq === 1) {
                ans = Math.max(ans, num)
            }
        }
        return ans
    }

    if (nums[0] === nums[n - 1]) return -1

    const set = new Set()
    for (let i = 1; i < n - 1; i++) {
        set.add(nums[i])
    }

    if (set.has(nums[0]) && set.has(nums[n - 1])) {
        return -1
    }

    if (set.has(nums[0])) return nums[n - 1]

    if (set.has(nums[n - 1])) return nums[0]

    return Math.max(nums[0], nums[n - 1])
};