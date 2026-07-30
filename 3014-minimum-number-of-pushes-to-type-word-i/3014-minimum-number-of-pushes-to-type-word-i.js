/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
    let n = word.length
    if (n < 9) return n

    let ans = 0

    if (n > 24) {
        ans += 4 * (n - 24)
        n = 24
    }

    if (n > 16) {
        ans += 3 * (n - 16)
        n = 16
    }

    if (n > 8) {
        ans += 2 * (n - 8)
        n = 8
    }

    ans += 8

    return ans
};