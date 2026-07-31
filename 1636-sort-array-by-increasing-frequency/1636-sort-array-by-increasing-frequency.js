/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    const map = new Map()

    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }

    const arr = Array.from(map.entries())
    arr.sort((a, b) => {
        if (a[1] === b[1]) {
            return b[0] - a[0]
        }
        return a[1] - b[1]
    })

    const ans = []

    for (let [num, freq] of arr) {
        while (freq) {
            ans.push(num)
            freq--
        }
    }

    return ans
};