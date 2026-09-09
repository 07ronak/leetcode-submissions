/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function (n) {
    if (n < 1000) return 0
    let count = 0

    if (n === 10 ** 15) {
        return 5 + (999000000000000 * 4) + (999000000000 * 3) + (999000000 * 2) + 999000
    }

    if (n >= 10 ** 12) {
        count += 4 * (n - (10 ** 12) + 1)
        return (count + (999000000000 * 3) + (999000000 * 2) + 999000)
    } else if (n >= 10 ** 9) {
        count += 3 * (n - (10 ** 9) + 1)
        return (count + (999000000 * 2) + 999000)
    } else if (n >= 10 ** 6) {
        count += 2 * (n - (10 ** 6) + 1)
        return (count + 999000)
    } else if (n >= 10 ** 3) {
        return n - 999
    }

};