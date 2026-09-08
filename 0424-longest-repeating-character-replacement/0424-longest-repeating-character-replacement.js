/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let ans = 1
    const n = s.length
    let count = new Array(26).fill(0)
    let left = 0
    let maxf = 1

    for (let right = 0; right < n; right++) {
        const idx = s.charCodeAt(right) - 65
        count[idx]++

        maxf = Math.max(maxf, count[idx])

        if (right - left + 1 - maxf > k) {
            count[s.charCodeAt(left) - 65]--
            left++
        }

        ans = Math.max(ans, right - left + 1)
    }

    return ans
};