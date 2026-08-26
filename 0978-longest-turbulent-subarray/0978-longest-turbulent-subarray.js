/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function (arr) {
    const n = arr.length
    let prevDiff = 0
    let max = 1
    let curr = 1

    for (let i = 1; i < n; i++) {
        const diff = arr[i] - arr[i - 1]

        if (diff === 0) {
            curr = 1
        } else if (diff * prevDiff < 0) {
            curr++
        } else {
            curr = 2
        }

        prevDiff = diff
        max = Math.max(max, curr)
    }

    return max
};