/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function (nums) {
    const n = nums.length

    for (let i = 0; i < n; i++) {
        if (sumDig(nums[i]) === i) return i
    }

    return -1
};

function sumDig(x) {
    let sum = 0

    while (x) {
        sum += x % 10
        x = Math.floor(x / 10)
    }

    return sum
}