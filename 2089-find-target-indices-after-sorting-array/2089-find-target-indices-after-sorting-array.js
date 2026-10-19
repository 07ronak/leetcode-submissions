var targetIndices = function (nums, target) {
    const n = nums.length;
    let count = 0;
    let first = 0;

    for (let i = 0; i < n; i++) {
        const num = nums[i]
        if (num === target) {
            count++
        }
        if (num < target) {
            first++
        }
    }

    const ans = []
    if (count === 0) return ans

    while (count) {
        ans.push(first++)
        count--
    }

    return ans
};