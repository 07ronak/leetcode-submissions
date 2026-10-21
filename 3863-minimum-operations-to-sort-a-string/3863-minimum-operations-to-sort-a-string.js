/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
    const n = s.length
    let sorted = 0
    let mx = 'a'
    let mn = 'z'
    let cx = 0
    let cn = 0

    for (let i = 0; i < n; i++) {
        if (i > 0 && s[i] >= s[i - 1]) {
            sorted++
        }
        if (mn === s[i]) {
            cn++
        }
        if (mx === s[i]) {
            cx++
        }

        if (mn > s[i]) {
            mn = s[i]
            cn = 1
        }
        if (mx < s[i]) {
            mx = s[i]
            cx = 1
        }

    }

    if (sorted === n - 1) return 0
    if (sorted === 0 && n === 2) return -1

    if (mn === s[0]) return 1
    if (mx === s[n - 1]) return 1

    if (mn === s[n - 1] && mx === s[0] && cx === 1 && cn === 1) return 3

    return 2
};