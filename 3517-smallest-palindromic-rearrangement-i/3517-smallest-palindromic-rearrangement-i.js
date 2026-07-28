/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function (s) {
    const n = s.length
    const half = Math.floor(n/2)
    const count = new Array(26).fill(0)

    for (let i=0; i<half; i++) {
        count[(s.charCodeAt(i)) - 97]++
    }

    let left = ""
    let right = ""

    for (let i = 0; i < 26; i++) {
        if (count[i]) {
            const curr = (String.fromCharCode(i + 97)).repeat(count[i])
            left += curr
            right = curr + right
        }

    }

    if (n & 1) {
        left += s[half]
    }

    return left + right
};