var minMoves2 = function (nums) {
    nums.sort((a, b) => a - b);

    const median = nums[Math.floor(nums.length / 2)];

    let sum = 0;

    for (const num of nums) {
        sum += Math.abs(median - num);
    }

    return sum;
};