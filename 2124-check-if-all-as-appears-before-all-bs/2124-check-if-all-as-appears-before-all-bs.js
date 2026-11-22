/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
    let b = false

    for (const c of s) {
        if (c === "b") {
            b = true
        }
        if (c === "a" && b) {
            return false
        }
    }

    return true
};