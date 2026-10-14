/**
 * @param {number} num
 * @param {number} sum
 * @return {string}
 */
var maxSumOfSquares = function (num, sum) {
    const max = num * 9
    if (sum > max) return ""

    if (num === 1) return `${sum}`

    let ans = "9".repeat(Math.floor(sum / 9));
    const r = sum % 9;

    if (r) {
        ans += `${r}`
    }

    ans += "0".repeat(num - ans.length)

    return ans
};