/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (nums, k) {
    const n = nums.length
    if (n === 1) return 1

    let ans = 1
    let left = 0
    let right = 0
    const map = new Map()

    while (right < n) {
        //if adding this current element will exceed 'k', 
        //keep removing from left until we remove the current element
        const num = nums[right]

        while ((map.get(num) + 1) > k) {
            map.set(nums[left], map.get(nums[left]) - 1)
            left++
        }

        //add the current element
        map.set(num, (map.get(num) || 0) + 1)
        right++

        ans = Math.max(ans, right - left)
    }

    return ans
};