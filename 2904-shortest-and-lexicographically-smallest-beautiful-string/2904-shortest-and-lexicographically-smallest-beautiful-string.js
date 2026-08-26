/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function (s, k) {
    const n = s.length
    let ans = []

    let total = 0
    let count = 0
    let l = 0

    for (let r = 0; r < n; r++) {
        if (s[r] === "1") {
            count++
            total++
        }

        while (count > k) {
            if (s[l] === "1") {
                count--
            }
            l++
        }

        if (count === k) {
            while (s[l] === "0") {
                l++
            }
            ans.push(s.substring(l, r + 1))
        }
    }

    if (k > total) return ""

    ans.sort((a, b) => a - b)
    return ans[0]
};