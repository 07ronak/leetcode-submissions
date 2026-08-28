/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let five = 0
    let ten = 0

    for (const bill of bills) {
        if (bill === 5) {
            five++
        } else if (bill === 10) {
            ten++
            if (!five) return false
            five--
        } else {
            if (ten && five) {
                ten--
                five--
            } else if (five >= 3) {
                five -= 3
            } else {
                return false
            }
        }
    }

    return true
};