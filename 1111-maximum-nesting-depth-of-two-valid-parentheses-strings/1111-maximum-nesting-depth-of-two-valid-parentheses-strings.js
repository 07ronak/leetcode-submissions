/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function (seq) {
    const n = seq.length
    const arr = new Array(n).fill(0)

    let max = 0
    let count = 0
    for (const c of seq) {
        if (c === "(") {
            count++
            max = Math.max(max, count)
        } else {
            count--
        }
    }

    max = Math.max(max / 2)
    count = 0

    for (let i = 0; i < n; i++) {
        if (seq[i] === "(") {
            count++
        }
        if (count > max) {
            arr[i] = 1
        }
        if (seq[i] === ")") {
            count--
        }
    }

    return arr
};