/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countRotations = function (s, k) {
    const n = s.length
    s += s
    
    let ans = 0
    let score = 0
    let l = 0

    for (let r = 1; r < s.length; r++) {

        if (r >= n) {
            if (s[l] === s[l + 1]) {
                score--
            }
            l++
        }

        if (s[r] === s[r - 1]) score++

        if (r > n - 1 && score === k) {
            ans++
        }
    }

    return ans
};