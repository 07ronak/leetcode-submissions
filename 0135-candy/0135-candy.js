/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    const n = ratings.length
    if (n === 1) return 1

    let max = new Array(n).fill(1)

    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            max[i] = max[i - 1] + 1
        }
    }

    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            max[i] = Math.max(max[i], max[i + 1] + 1)
        }
    }

    return max.reduce((a, b) => a + b, 0)
};