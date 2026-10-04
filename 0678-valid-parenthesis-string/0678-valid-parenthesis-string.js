/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    if (s[0] === ")") return false
    let maxUnpaired = 0
    let minUnpaired = 0

    for (const c of s) {
        if (c === "(") {
            minUnpaired++
            maxUnpaired++
        } else if (c === ")") {
            minUnpaired--
            maxUnpaired--
            if (maxUnpaired < 0) return false
        } else {
            minUnpaired--
            maxUnpaired++
        }

        minUnpaired = Math.max(0, minUnpaired)
    }

    return minUnpaired === 0
};