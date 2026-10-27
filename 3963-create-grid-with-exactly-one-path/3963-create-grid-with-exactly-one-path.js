/**
 * @param {number} m
 * @param {number} n
 * @return {string[]}
 */
var createGrid = function (m, n) {
    let arr = Array.from({ length: m }, () => new Array(n).fill("#"))

    for (let r = 0; r < m; r++) {
        arr[r][0] = "."
    }

    for (let c = 1; c < n; c++) {
        arr[m - 1][c] = "."
    }

    for (let r = 0; r < m; r++) {
        arr[r] = arr[r].join("")
    }

    return arr
};