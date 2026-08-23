/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
    const n = s.length
    const count = new Array(26).fill(0)
    let idx = -1
    let maxf = 0
    let maxChar = null

    for (const c of s) {
        const i = c.charCodeAt(0) - 97
        count[i]++

        if (count[i] > maxf) {
            maxf = count[i]
            maxChar = c
            idx = i
        }
    }

    if ((n - maxf) < (maxf - 1)) return ""

    const res = new Array(n).fill("")
    let pos = 0

    while (count[idx]) {
        res[pos] = maxChar
        count[idx]--
        pos += 2
    }

    for (let i = 0; i < 26; i++) {
        while (count[i]) {
            if (pos >= n) {
                pos = 1
            }

            res[pos] = String.fromCharCode(i + 97)
            pos += 2
            count[i]--
        }
    }

    return res.join("")
};