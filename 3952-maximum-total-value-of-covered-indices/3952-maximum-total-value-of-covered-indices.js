/**
 * @param {number[]} nums
 * @param {string} s
 * @return {bigint}
 */
var maxTotal = function(nums, s) {
    let sum = 0;
    let curr = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (s[i] === '0') {
            curr = num;
        } else if (curr < num) {
            sum += num;
        } else {
            sum += curr;
            curr = num;
        }
    }

    return sum;
};