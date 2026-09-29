/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var hasValidPath = function (grid) {
    if (grid[0][0] === ")") return false

    const rows = grid.length
    const cols = grid[0].length

    if (grid[rows - 1][cols - 1] === "(") return false;

    if ((cols + rows - 1) & 1) return false

    const range = (cols + rows - 1) / 2

    const dp = Array.from(
        { length: rows },
        () => Array.from({ length: cols }, () => new Array(range + 1).fill(false))
    );

    dp[0][0][1] = true

    //first column
    for (let i = 1; i < rows; i++) {
        const val = (grid[i][0] === "(" ? 1 : -1)
        const arr = dp[i - 1][0]
        for (let k = 0; k <= range; k++) {
            if (arr[k]) {
                if (k + val < 0 || k + val > range) break
                dp[i][0][k + val] = true
                break
            }
        }

    }

    //first row
    for (let i = 1; i < cols; i++) {
        const val = (grid[0][i] === "(" ? 1 : -1)
        const arr = dp[0][i - 1]
        for (let k = 0; k <= range; k++) {
            if (arr[k]) {
                if (k + val < 0 || k + val > range) break
                dp[0][i][k + val] = true
                break
            }
        }
    }

    for (let r = 1; r < rows; r++) {
        for (let c = 1; c < cols; c++) {
            const val = (grid[r][c] === "(" ? 1 : -1)

            const toparr = dp[r - 1][c]
            for (let k = 0; k <= range; k++) {
                if (toparr[k]) {
                    if (k + val < 0 || k + val > range) continue
                    dp[r][c][k + val] = true
                }
            }

            const leftarr = dp[r][c - 1]
            for (let k = 0; k <= range; k++) {
                if (leftarr[k]) {
                    if (k + val < 0 || k + val > range) continue
                    dp[r][c][k + val] = true
                }
            }
        }
    }

    return dp[rows - 1][cols - 1][0]
};