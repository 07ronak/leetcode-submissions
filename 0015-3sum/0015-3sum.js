/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const n = nums.length
    nums.sort((a, b) => a - b)
    const ans = []

    for (let i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue

        if (nums[i] + nums[i + 1] + nums[i + 2] > 0) break
        if (nums[i] + nums[n - 1] + nums[n - 1] < 0) continue

        let j = i + 1
        let k = n - 1

        while (k > j) {
            const val = nums[i] + nums[j] + nums[k]

            if (val === 0) {
                ans.push([nums[i], nums[j], nums[k]])

                while (k > j && nums[k] === nums[k - 1]) k--
                while (k > j && nums[j] === nums[j + 1]) j++

                k--
                j++
            } else if (val > 0) {
                k--
            } else {
                j++
            }
        }
    }

    return ans
};