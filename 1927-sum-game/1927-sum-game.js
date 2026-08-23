/**
 * @param {string} num
 * @return {boolean}
 */
var sumGame = function (num) {
    const n = num.length

    let count1 = 0
    let count2 = 0

    let first = 0
    let second = 0

    for (let i = 0; i < n / 2; i++) {
        if ((num[i]) !== "?") {
            first += parseInt(num[i])
        } else {
            count1++
        }
    }

    for (let i = n / 2; i < n; i++) {
        if ((num[i]) !== "?") {
            second += parseInt(num[i])
        } else {
            count2++
        }
    }

    const diff = count2 - count1

    if (diff & 1) {
        return true
    }

    return first - second !== ((diff) * 9) / 2

};