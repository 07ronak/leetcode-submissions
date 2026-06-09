/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    const indegree = Array(n).fill(0);

    for (const [u, v] of edges) {
        indegree[v]++;
    }

    const result = [];

    for (let i = 0; i < n; i++) {
        if (indegree[i] === 0) {
            result.push(i);
        }
    }

    return result;
};