/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumSafenessFactor = function (grid) {
    const n = grid.length;
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];

    // Step 1: Multi-source BFS to compute distance to nearest thief
    const dist = Array.from({ length: n }, () => Array(n).fill(Infinity));
    const queue = [];
    let head = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                dist[i][j] = 0;
                queue.push([i, j]);
            }
        }
    }

    while (head < queue.length) {
        const [x, y] = queue[head++];

        for (const [dx, dy] of dirs) {
            const nx = x + dx;
            const ny = y + dy;

            if (
                nx >= 0 &&
                ny >= 0 &&
                nx < n &&
                ny < n &&
                dist[nx][ny] === Infinity
            ) {
                dist[nx][ny] = dist[x][y] + 1;
                queue.push([nx, ny]);
            }
        }
    }

    // Step 2: Check if a path exists with minimum safeness >= limit
    function can(limit) {
        if (dist[0][0] < limit) return false;

        const visited = Array.from({ length: n }, () => Array(n).fill(false));
        const q = [[0, 0]];
        let idx = 0;
        visited[0][0] = true;

        while (idx < q.length) {
            const [x, y] = q[idx++];

            if (x === n - 1 && y === n - 1) return true;

            for (const [dx, dy] of dirs) {
                const nx = x + dx;
                const ny = y + dy;

                if (
                    nx >= 0 &&
                    ny >= 0 &&
                    nx < n &&
                    ny < n &&
                    !visited[nx][ny] &&
                    dist[nx][ny] >= limit
                ) {
                    visited[nx][ny] = true;
                    q.push([nx, ny]);
                }
            }
        }

        return false;
    }

    // Step 3: Binary search on answer
    let left = 0;
    let right = 2 * n;
    let ans = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (can(mid)) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return ans;
};