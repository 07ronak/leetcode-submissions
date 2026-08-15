/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
    if (k === 1) return nums
    const n = nums.length
    const total = nums.reduce((a, b) => a + b, 0)

    if (total % k !== 0) return false
    const side = total / k

    nums.sort((a, b) => b - a)
    if (nums[0] > side) return false

    const bucket = new Array(k).fill(0)

    return bt(0)

    function bt(idx) {
        if (idx === n) return true

        const val = nums[idx]

        for (let i = 0; i < k; i++) {
            if (bucket[i] + val > side) continue

            bucket[i] += val

            if (bt(idx + 1)) return true

            bucket[i] -= val

            if (bucket[i] === 0) return false
        }

        return false
    }
};