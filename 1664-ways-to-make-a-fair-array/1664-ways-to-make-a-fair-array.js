/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function(nums) {
    const n = nums.length;

    let totalEven = 0;
    let totalOdd = 0;

    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            totalEven += nums[i];
        } else {
            totalOdd += nums[i];
        }
    }

    let leftEven = 0;
    let leftOdd = 0;
    let count = 0;

    for (let i = 0; i < n; i++) {
        let rightEven, rightOdd;

        if (i % 2 === 0) {
            rightEven = totalEven - leftEven - nums[i];
            rightOdd = totalOdd - leftOdd;
        } else {
            rightEven = totalEven - leftEven;
            rightOdd = totalOdd - leftOdd - nums[i];
        }

        const newEven = leftEven + rightOdd;
        const newOdd = leftOdd + rightEven;

        if (newEven === newOdd) {
            count++;
        }

        if (i % 2 === 0) {
            leftEven += nums[i];
        } else {
            leftOdd += nums[i];
        }
    }

    return count;
};