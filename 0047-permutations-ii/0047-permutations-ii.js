/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const n = nums.length
    nums.sort((a, b) => a - b)
    const res = []
    const pick = new Array(n).fill(false)

    bt([], pick)
    return res

    function bt(arr, pick) {
        if (arr.length === n) {
            res.push([...arr])
            return
        }

        for (let i = 0; i < n; i++) {
            if (!pick[i]) {
                arr.push(nums[i])
                pick[i] = true
                bt(arr, pick)
                arr.pop()
                pick[i] = false
                
                while (i + 1 < n && nums[i] === nums[i + 1]) {
                    i++
                }
            }

        }
    }
};