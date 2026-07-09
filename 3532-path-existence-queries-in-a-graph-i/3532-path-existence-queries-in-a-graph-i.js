var pathExistenceQueries = function (n, nums, maxDiff, queries) {
    const comp = new Array(n).fill(0);
    let id = 0;

    for (let i = 1; i < n; i++) {
        if (nums[i] - nums[i - 1] > maxDiff) {
            id++;
        }
        comp[i] = id;
    }

    return queries.map(([u, v]) => comp[u] === comp[v]);
};