/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
    const graph = Array.from(
        { length: n + 1 },
        () => []
    );

    for (const [u, v, dist] of roads) {
        graph[u].push([v, dist]);
        graph[v].push([u, dist]);
    }

    let answer = Infinity;
    const visited = new Set();

    function dfs(node) {
        visited.add(node);

        for (const [next, dist] of graph[node]) {
            answer = Math.min(answer, dist);

            if (!visited.has(next)) {
                dfs(next);
            }
        }
    }

    dfs(1);

    return answer;
};