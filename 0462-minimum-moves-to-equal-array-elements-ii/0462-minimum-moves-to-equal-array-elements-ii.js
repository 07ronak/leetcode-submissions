
var minMoves2 = function (nums) {
    const n = nums.length;
    const median = quickSelect(nums, Math.floor(n / 2));

    let moves = 0;

    for (const num of nums) {
        moves += Math.abs(num - median);
    }

    return moves;
};

function quickSelect(nums, k) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const pivot = nums[right];
        let p = left;

        for (let i = left; i < right; i++) {
            if (nums[i] < pivot) {
                [nums[i], nums[p]] = [nums[p], nums[i]];
                p++;
            }
        }

        [nums[p], nums[right]] = [nums[right], nums[p]];

        if (p === k) {
            return nums[p];
        } else if (p < k) {
            left = p + 1;
        } else {
            right = p - 1;
        }
    }
}
