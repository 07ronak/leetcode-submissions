/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let l = 0
    let r = nums.length - 1

    while (r > l) {
        const mid = Math.floor((l + r) / 2)

        if (nums[r] > nums[mid]) {
            if (nums[r] >= target && target > nums[mid]) {
                l = mid + 1
            } else {
                r = mid
            }
        } else {
            if (nums[l] <= target && nums[mid] >= target) {
                r = mid
            } else {
                l = mid + 1
            }
        }
    }

    return nums[l] === target ? l : -1
};