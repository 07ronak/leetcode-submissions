/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    const MOD = 1e9 + 7;
    const n = nums.length;

    const cnt = new Float64Array(4 * n + 5);
    const sqCnt = new Float64Array(4 * n + 5);
    const lazy = new Float64Array(4 * n + 5);

    const lastSeen = new Map();

    // Apply addition x to segment [st, end]
    function apply(node, st, end, x) {
        const len = end - st + 1;

        // (a + x)^2 = a^2 + 2*a*x + x^2
        sqCnt[node] = (
            sqCnt[node] +
            2 * x * cnt[node] +
            ((x * x) % MOD) * len
        ) % MOD;

        cnt[node] = (cnt[node] + len * x) % MOD;

        lazy[node] = (lazy[node] + x) % MOD;
    }

    // Push pending lazy updates to children
    function lazyPropagation(node, st, end) {
        if (lazy[node] === 0) return;

        const x = lazy[node];
        const mid = Math.floor((st + end) / 2);

        apply(2 * node, st, mid, x);
        apply(2 * node + 1, mid + 1, end, x);

        lazy[node] = 0;
    }

    // Merge left and right children
    function merge(node, left, right) {
        cnt[node] = (cnt[left] + cnt[right]) % MOD;
        sqCnt[node] = (sqCnt[left] + sqCnt[right]) % MOD;
    }

    // Range update: add 1 to [ql, qr]
    function update(node, st, end, ql, qr) {
        // No overlap
        if (qr < st || end < ql) return;

        // Complete overlap
        if (ql <= st && end <= qr) {
            apply(node, st, end, 1);
            return;
        }

        // Partial overlap
        lazyPropagation(node, st, end);

        const mid = Math.floor((st + end) / 2);

        update(2 * node, st, mid, ql, qr);
        update(2 * node + 1, mid + 1, end, ql, qr);

        merge(node, 2 * node, 2 * node + 1);
    }

    let ans = 0;

    for (let i = 0; i < n; i++) {
        const prev = lastSeen.has(nums[i])
            ? lastSeen.get(nums[i])
            : -1;

        const st = prev + 1;

        lastSeen.set(nums[i], i);

        // Increment distinct count for subarrays
        // starting in [st, i]
        update(1, 0, n - 1, st, i);

        // Sum of squares for subarrays ending at i
        ans = (ans + sqCnt[1]) % MOD;
    }

    return ans;
};