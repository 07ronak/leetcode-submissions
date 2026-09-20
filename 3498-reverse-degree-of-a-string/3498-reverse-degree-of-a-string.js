/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function (s) {
    const n = s.length
    let ans = 0

    for (let i = 0; i < n; i++) {
        const char = s.charCodeAt(i) - 97
        ans += ((i + 1) * (26 - char))
    }

    return ans
};