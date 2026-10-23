var sortPermutation = function(nums) {
    let k = null;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) {
            if (k === null) {
                k = nums[i];
            } else {
                k &= nums[i];
            }
        }
    }

    return k === null ? 0 : k;
};