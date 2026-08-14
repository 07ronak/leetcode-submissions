/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const rows = board.length
    const cols = board[0].length
    const n = word.length

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === word[0] && bt(0, r, c)) {
                return true
            }
        }
    }

    return false

    function bt(idx, r, c) {
        if (r < 0 || r >= rows) return false
        if (c < 0 || c >= cols) return false
        if (board[r][c] !== word[idx]) return false

        if (idx === n - 1) return true

        const char = board[r][c]
        board[r][c] = "#"

        const found = (
            bt(idx + 1, r + 1, c) ||
            bt(idx + 1, r, c + 1) ||
            bt(idx + 1, r - 1, c) ||
            bt(idx + 1, r, c - 1)
        )

        board[r][c] = char

        return found
    }

};