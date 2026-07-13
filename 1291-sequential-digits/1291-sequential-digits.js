/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
    const str = "123456789"
    const max = high.toString().length
    const min = low.toString().length
    const ans = []

    for (let len = min; len <= max; len++) {
        for (let i = 0; i + len <= 9; i++) {
            const num = Number(str.slice(i, i + len))

            if (num >= low && num <= high) {
                ans.push(num)
            }
        }
    }

    return ans
};