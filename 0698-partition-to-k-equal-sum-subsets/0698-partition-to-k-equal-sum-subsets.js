/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
    if (k === 1) return nums
    nums.sort((a, b) => b - a)
    const n = nums.length
    const total = nums.reduce((a, b) => a + b, 0)

    if (total % k !== 0) return false

    const req = total / k

    if (nums[0] > req) return false

    const dis = new Array(k).fill(0)
    let ans = false

    bt(0)

    return ans

    function bt(idx) {
        if (idx === n) {
            for (let i = 0; i < k; i++) {
                if (dis[i] !== req) return
            }
            ans = true
            return
        }

        const val = nums[idx]

        for (let i = 0; i < k; i++) {
            if (dis[i] + val > req) continue

            dis[i] += val

            bt(idx + 1)
            if (ans) return

            dis[i] -= val

            if (dis[i] === 0) break
        }
    }
};