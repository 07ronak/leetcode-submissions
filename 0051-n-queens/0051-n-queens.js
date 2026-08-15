var solveNQueens = function (n) {
    const board = Array.from(
        { length: n },
        () => new Array(n).fill(".")
    )

    const res = []

    bt(0, false)

    return res

    function bt(c, skipMirror) {
        if (c === n) {
            const solution = board.map(row => row.join(""))
            res.push(solution)

            if (!skipMirror) {
                const mirror = solution.slice().reverse()
                res.push(mirror)
            }

            return
        }

        const limit = c === 0
            ? Math.ceil(n / 2)
            : n

        const middleRow = (n - 1) / 2 // non-integer for even n, so never matches

        for (let i = 0; i < limit; i++) {
            if (isSafe(board, i, c, n)) {
                board[i][c] = "Q"

                // Middle row (odd n only) is its own mirror image for column 0,
                // so both paired solutions are reachable from this same branch.
                // Don't manually add the mirror here or it gets double-counted.
                const nextSkip = (c === 0 && i === middleRow) ? true : skipMirror

                bt(c + 1, nextSkip)

                board[i][c] = "."
            }
        }
    }
}

function isSafe(board, r, c, n) {
    // Check row
    for (let i = 0; i < n; i++) {
        if (board[r][i] === "Q") return false
    }

    // Check upper-left diagonal
    let row = r - 1
    let col = c - 1

    while (row >= 0 && col >= 0) {
        if (board[row][col] === "Q") return false
        row--
        col--
    }

    // Check lower-left diagonal
    row = r + 1
    col = c - 1

    while (row < n && col >= 0) {
        if (board[row][col] === "Q") return false
        row++
        col--
    }

    return true
}