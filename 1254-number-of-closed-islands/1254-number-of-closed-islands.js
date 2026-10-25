/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
    let count = 0
    const n = grid.length
    const m = grid[0].length
    let valid = true

    for (let i = 1; i < n - 1; i++) {
        for (let j = 1; j < m - 1; j++) {
            if (grid[i][j] === 0) {
                valid = true
                dfs(i, j)
                if (valid) count++
            }
        }
    }

    return count

    function dfs(r, c) {
        if (r < 0 || c < 0) return
        if (r >= n || c >= m) return

        if (grid[r][c] === 0) {
            if (r === 0 || c === 0 || r === n - 1 || c === m - 1) {
                valid = false
            }

            grid[r][c] = 8
        } else {
            return
        }

        dfs(r - 1, c)
        dfs(r + 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)
    }
};