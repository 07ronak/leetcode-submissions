/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
    let left = 0;
    const n = nums.length
    const total = nums.reduce((acc, num) => acc + num, 0);

    for (let i = 0; i < n; i++) {
        const num = nums[i]
        const right = total - (left + num);
        nums[i] = (Math.abs(left - right));
        left += num;
    }

    return nums
};