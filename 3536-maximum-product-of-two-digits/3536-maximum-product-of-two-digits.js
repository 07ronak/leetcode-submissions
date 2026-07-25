/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function (n) {
    let ans = 0
    let max = 0
    let prev = 0

    while (n) {
        const digit = n % 10

        ans = Math.max(ans, max * digit)

        max = Math.max(max, digit)

        n = Math.floor(n / 10)
    }

    return ans
};