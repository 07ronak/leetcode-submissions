/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let max = 0
    const set = new Set(nums)

    for (let num of set) {
        if (set.has(num - 1)) {
            continue
        }

        let curr = 1
        //now we are the least number
        while (set.has(num + 1)) {
            curr++
            num++
        }

        max = Math.max(max, curr)
    }

    return max
};