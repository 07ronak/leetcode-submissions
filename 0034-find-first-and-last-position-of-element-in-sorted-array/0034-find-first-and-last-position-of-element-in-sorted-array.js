/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let first = -1;
    let last = -1;
    const n = nums.length

    // find first occurrence
    let l = 0, r = n - 1;
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);

        if (nums[mid] === target) {
            first = mid;
            r = mid - 1;   // keep searching left
        } else if (nums[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }

    // find last occurrence
    l = 0;
    r = n - 1;
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);

        if (nums[mid] === target) {
            last = mid;
            l = mid + 1;   // keep searching right
        } else if (nums[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }

    return [first, last];
};