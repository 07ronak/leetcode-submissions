/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function (nums) {
    const n = nums.length;
    const map = new Map();
    let ans = 0

    for (let i = 0; i < n; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)

        for (let j = 0; j <= i; j++) {
            ans += (map.size ** 2)
            map.set(nums[j], map.get(nums[j]) - 1)

            if (map.get(nums[j]) === 0) {
                map.delete(nums[j])
            }
        }

        for (let j = 0; j <= i; j++) {
            map.set(nums[j], (map.get(nums[j]) || 0) + 1)
        }
    }

    return ans
};