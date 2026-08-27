/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    const last = {}
    const n = s.length

    for (let i = 0; i < n; i++) {
        last[s[i]] = i
    }

    let start = 0
    let end = 0
    const ans = []

    for (let i = 0; i < n; i++) {
        const char = s[i]

        end = Math.max(end, last[char])

        if (end === i) {
            ans.push(end - start + 1)
            start = i + 1
        }
    }

    return ans
};