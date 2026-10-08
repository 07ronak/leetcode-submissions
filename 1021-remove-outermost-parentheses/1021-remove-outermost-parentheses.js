/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let depth = 0
    let str = ""

    for (const c of s) {
        if (c === "(") {
            depth++
            if (depth > 1) {
                str += c
            }
        } else {
            depth--
            if (depth) {
                str += c
            }
        }
    }

    return str
};