/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countIslands = function (grid, k) {
    const rows = grid.length
    const cols = grid[0].length
    let count = 0
    let sum = 0

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] !== 0) {
                sum = 0
                dfs(r, c)
                if (sum % k === 0) {
                    count++
                }
                sum = 0
            }
        }
    }

    return count

    function dfs(r, c) {
        if (r < 0 || c < 0) return
        if (r >= rows || c >= cols) return

        if (grid[r][c] !== 0) {
            sum += grid[r][c]
            grid[r][c] = 0
        } else {
            return
        }

        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)
    }
};