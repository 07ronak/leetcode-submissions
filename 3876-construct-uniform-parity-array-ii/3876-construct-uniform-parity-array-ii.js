/**
 * @param {number[]} nums1
 * @return {boolean}
 */
var uniformArray = function (nums1) {
    let minOdd = Infinity
    let minEven = Infinity

    for (const num of nums1) {
        if (num & 1) {
            minOdd = Math.min(minOdd, num)
        }
        else {
            minEven = Math.min(minEven, num)
        }
    }

    if (minOdd === Infinity || minEven === Infinity) return true

    if (minOdd < minEven) return true

    return false
};