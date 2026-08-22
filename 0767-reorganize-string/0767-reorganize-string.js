/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
    const n = s.length
    const count = new Array(26).fill(0)

    let maxf = 0
    let i = -1
    let maxChar = null

    for (const char of s) {
        const idx = char.charCodeAt(0) - 97
        count[idx]++
        if (count[idx] > maxf) {
            maxf = count[idx]
            i = idx
            maxChar = char
        }
    }

    if ((n - maxf) < (maxf - 1)) return ""

    let pos = 0
    const res = new Array(n)

    while (count[i] > 0) {
        res[pos] = maxChar

        count[i]--
        pos += 2
    }

    for (let i = 0; i < 26; i++) {
        while (count[i] > 0) {
            if (pos >= n) {
                pos = 1
            }

            res[pos] = String.fromCharCode(i + 97)
            count[i]--
            pos += 2
        }
    }

    return res.join("")
};