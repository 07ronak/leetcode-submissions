/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    let sum = 0;

    function backtrack(index, xor) {
        if (index === nums.length) {
            sum += xor;
            return;
        }

        // Include nums[index]
        backtrack(index + 1, xor ^ nums[index]);

        // Don't include nums[index]
        backtrack(index + 1, xor);
    }

    backtrack(0, 0);

    return sum;
};