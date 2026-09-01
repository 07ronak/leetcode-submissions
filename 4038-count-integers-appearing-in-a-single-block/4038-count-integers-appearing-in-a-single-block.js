/**
 * @param {number[]} nums
 * @return {number}
 */
var countSpecialIntegers = function (nums) {
    const n = nums.length

    const sp = new Set()
    const notsp = new Set()

    let count = 0

    for (let i = 0; i < n; i++) {
        const num = nums[i]

        if (notsp.has(num)) continue

        if (sp.has(num)) {
            sp.delete(num)
            notsp.add(num)

            while (i + 1 < n && nums[i + 1] === num) {
                i++
            }
            continue
        }

        sp.add(num)

        while (i + 1 < n && nums[i + 1] === num) {
            i++
        }
    }

    return sp.size
};