/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let ans = []
    const n = nums.length

    function bt(index, arr) {
        if (index === n) {
            ans.push(arr)
            return
        }

        const inc = [...arr]
        inc.push(nums[index])

        bt(index + 1, inc) //include

        bt(index + 1, arr) //exclude
    }

    bt(0, [])
    return ans
};