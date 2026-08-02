/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var countRatioSubarrays = function (nums, a, b) {
    const ratio = a / b;
    const n = nums.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        let odd = 0;
        let even = 0;
        for (let j = i; j < n; j++) {
            if (nums[j] & 1) {
                odd++;
            } else {
                even++;
            }

            if (odd && even / odd <= ratio) {
                count++;
            }
        }
    }

    return count;
};
