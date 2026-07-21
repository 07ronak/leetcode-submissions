/**
 * @param {string} s
 * @return {number}
 */
var maxActiveSectionsAfterTrade = function (s) {
    const n = s.length
    let cnt1 = 0

    for (let i = 0; i < n; i++) {
        if (s[i] === "1") cnt1++
    }

    let prev = -1
    let best = 0
    let i = 0

    while (i < n) {
        let start = i
        while (i < n && s[start] === s[i]) {
            i++
        }
        if (s[start] === "0") {
            if (prev !== -1) {
                best = Math.max(best, prev + (i-start))
            }
            prev = i - start
        }
    }

    return cnt1 + best
};