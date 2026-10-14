/**
 * @param {number} num
 * @param {number} sum
 * @return {string}
 */
var maxSumOfSquares = function (num, sum) {
    const max = num * 9
    if (sum > max) return ""

    if (num === 1) return `${sum}`

    let ans = ""

    while (num) {
        if (sum >= 9) {
            ans += '9'
            sum -= 9
        } else{
            ans += `${sum}`
            sum = 0
        }
        num--
    }

    return ans
};