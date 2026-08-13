var exist = function (board, word) {
    const rows = board.length;
    const cols = board[0].length;
    const n = word.length

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === word[0] && dfs(r, c, 0)) {
                return true;
            }
        }
    }

    return false;

    function dfs(r, c, idx) {
        if (
            r < 0 || r >= rows ||
            c < 0 || c >= cols ||
            board[r][c] !== word[idx]
        ) {
            return false;
        }

        if (idx === n - 1) {
            return true;
        }

        // Mark visited
        const ch = board[r][c];
        board[r][c] = '#';

        const found =
            dfs(r + 1, c, idx + 1) ||
            dfs(r - 1, c, idx + 1) ||
            dfs(r, c + 1, idx + 1) ||
            dfs(r, c - 1, idx + 1);

        // Restore
        board[r][c] = ch;

        return found;
    }
};