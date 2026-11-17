function segmentCost(s, l, m, factors) {
    let best = m;
    for (const d of factors[m]) {
        const groups = Math.floor(m / d); // Each group contains groups characters
        let changes = 0;
        for (let offset = 0; offset < d; offset++) {
            for (let t = 0; t < Math.floor(groups / 2); t++) {
                // Pair characters from opposite ends of the group
                if (
                    s[l + offset + t * d] !==
                    s[l + offset + (groups - 1 - t) * d]
                ) {
                    changes++;
                }
            }
        }
        best = Math.min(best, changes);
    }
    return best;
}

var minimumChanges = function (s, k) {
    const n = s.length;
    const factors = Array.from({ length: n + 1 }, () => []);
    // Precompute the proper divisors of each number
    for (let d = 1; d <= Math.floor(n / 2); d++) {
        for (let m = d * 2; m <= n; m += d) {
            factors[m].push(d);
        }
    }
    const cost = Array.from({ length: n }, () => new Array(n).fill(0));
    for (let l = 0; l + 1 < n; l++) {
        for (let r = l + 1; r < n; r++) {
            // Each substring must have length at least 2
            cost[l][r] = segmentCost(s, l, r - l + 1, factors);
        }
    }

    let prev = Array.from({ length: n }, (_, start) => cost[start][n - 1]); // The case seg = 1
    for (let seg = 2; seg <= k; seg++) {
        // Increase the number of segments from 2 to k
        const cur = new Array(n).fill(n);
        const limit = n - 1 - 2 * (seg - 1);
        for (let start = 0; start + 2 * seg <= n; start++) {
            // Leave at least 2*seg characters
            for (let e = start + 1; e <= limit; e++) {
                cur[start] = Math.min(cur[start], cost[start][e] + prev[e + 1]);
            }
        }
        prev = cur;
    }
    return prev[0];
};