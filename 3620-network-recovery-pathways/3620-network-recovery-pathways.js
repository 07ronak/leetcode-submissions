var findMaxPathScore = function (edges, online, k) {
    const n = online.length;
    const g = Array.from({ length: n }, () => []);
    let l = Infinity,
        r = 0;

    for (const [u, v, w] of edges) {
        if (!online[u] || !online[v]) {
            continue;
        }
        g[u].push([v, w]);
        l = Math.min(l, w);
        r = Math.max(r, w);
    }

    const check = (mid) => {
        const memo = new Array(n).fill(-1);

        const dfs = (u) => {
            if (u === n - 1) {
                return 0;
            }
            if (memo[u] !== -1) {
                return memo[u];
            }

            let res = Infinity;
            for (const [v, w] of g[u]) {
                if (w >= mid) {
                    res = Math.min(res, dfs(v) + w);
                }
            }
            memo[u] = res;
            return res;
        };

        return dfs(0) <= k;
    };

    if (!check(l)) {
        return -1;
    }

    while (l <= r) {
        const mid = (l + r) >> 1;
        if (check(mid)) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return r;
};