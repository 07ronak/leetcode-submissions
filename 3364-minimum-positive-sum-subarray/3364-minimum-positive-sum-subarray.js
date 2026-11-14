/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function (nums, l, r) {
    let min = Infinity;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        let sum = 0
        for (let j = i; j < n; j++) {
            sum += nums[j];
            const len = j - i + 1;
            if (len < l) continue;
            if (len > r) break;

            if (sum === 1) return 1
            if (sum > 0) {
                min = Math.min(min, sum)
            }
        }
    }

    return min === Infinity ? -1 : min
};