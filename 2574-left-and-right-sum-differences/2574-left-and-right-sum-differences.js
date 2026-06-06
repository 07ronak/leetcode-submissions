/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
    let left = 0;
    const n = nums.length
    let res = [];
    const total = nums.reduce((acc, num) => acc + num, 0);

    for (let i = 0; i < n; i++) {
        const right = total - (left + nums[i]);
        res.push(Math.abs(left - right));
        left += nums[i];
    }

    return res;
};