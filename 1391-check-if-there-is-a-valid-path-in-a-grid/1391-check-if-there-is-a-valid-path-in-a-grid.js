/**
 * @param {number[][]} grid
 * @return {boolean}
 */
const TRANS = [
    [-1, 1, -1, 3],
    [0, -1, 2, -1],
    [3, 2, -1, -1],
    [1, -1, -1, 2],
    [-1, 0, 3, -1],
    [-1, -1, 1, 0]
];
const DIRS = [[-1, 0], [0, 1], [1, 0], [0, -1]];
const START = [[1, 3], [0, 2], [2, 3], [1, 2], [0, 3], [0, 1]];

const hasValidPath = grid => {
    if (grid[0][0] === 5) return false;
    if (grid.at(-1).at(-1) === 4) return false;

    const m = grid.length, n = grid[0].length;
    if (m === 1 && n === 1) return true;

    const check = dir => {
        let [r, c] = DIRS[dir];

        while (grid[r]?.[c]) {
            dir = TRANS[grid[r][c] - 1][dir];
            if (dir === -1 || r == 0 && c == 0) return false;
            if (r === m - 1 && c === n - 1) return true;

            const [dr, dc] = DIRS[dir];
            r += dr; c += dc;
        }

        return false;
    };

    return START[grid[0][0] - 1].some(c => check(c));
};