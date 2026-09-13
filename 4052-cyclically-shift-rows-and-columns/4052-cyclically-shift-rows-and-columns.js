/**
 * @param {number} n
 * @param {number[][]} grid
 * @param {number[]} rowShift
 * @param {number[]} colShift
 * @return {number[][]}
 */
var cyclicShift = function (n, grid, rowShift, colShift) {
    const ans = Array.from({ length: n }, () => new Array(n).fill(0))

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            ans[r][c] = grid[r][(c + rowShift[r]) % n]
        }
    }

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            grid[r][c] = ans[(r + colShift[c]) % n][c]
        }
    }

    return grid
};