/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var minEdgeReversals = function(n, edges) {

    const graph = Array.from({length: n}, () => [])

    // build graph with reversal cost
    for (const [u,v] of edges) {
        graph[u].push([v,0]) // correct direction
        graph[v].push([u,1]) // needs reversal
    }

    const ans = new Array(n).fill(0)

    // step1: calculate reversals needed for root=0
    const dfs = (node,parent) => {
        let count = 0

        for (const [nei,cost] of graph[node]) {
            if (nei === parent) continue

            count += cost + dfs(nei,node)
        }

        return count
    }

    ans[0] = dfs(0,-1)

    // step2: reroot
    const reroot = (node,parent) => {

        for (const [nei,cost] of graph[node]) {
            if (nei === parent) continue

            if (cost === 0)
                ans[nei] = ans[node] + 1
            else
                ans[nei] = ans[node] - 1

            reroot(nei,node)
        }
    }

    reroot(0,-1)

    return ans
};