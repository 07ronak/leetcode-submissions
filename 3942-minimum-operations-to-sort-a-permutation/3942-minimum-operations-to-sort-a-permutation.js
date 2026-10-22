/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            let found = true
            for (let j = 0; j < n; j++) {
                if (nums[(i + j) % n] !== j) {
                    found = false
                    break
                }
            }
            if (found) {
                return Math.min(i, n - i + 2)
            }
        }
    }

    const rev = nums.reverse()

    for (let i = 0; i < n; i++) {
        if (rev[i] === 0) {
            let found = true
            for (let j = 0; j < n; j++) {
                if (rev[(i + j) % n] !== j) {
                    found = false
                    break
                }
            }
            if (found) {
                return 1 + Math.min(i, n - i)
            }
        }
    }

    return -1
};