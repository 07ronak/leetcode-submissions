/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function (nums) {
    const n = nums.length

    let one = 0
    let two = 1

    for (let i = 2; i < n; i++) {
        if (nums[one] > nums[two]) {
            let idx = one + 1

            while (idx !== i) {
                [nums[idx], nums[i]] = [nums[i], nums[idx]]
                idx++
            }
            one++
        }
        two++
    }

    return nums
};