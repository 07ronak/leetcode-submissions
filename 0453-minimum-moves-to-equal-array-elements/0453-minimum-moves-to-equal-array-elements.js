var minMoves = function (nums) {
    const min = Math.min(...nums)
    const n = nums.length;
    let sum = 0

    for (let i = 0; i < n; i++) {
        if (nums[i] !== min) {
            sum += (nums[i] - min)
        }
    }

    return sum
};