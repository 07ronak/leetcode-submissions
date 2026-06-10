/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var findCriticalAndPseudoCriticalEdges = function(n, edges) {

    edges = edges.map((e, i) => [...e, i]);
    edges.sort((a, b) => a[2] - b[2]);

    class DSU {
        constructor(n) {
            this.parent = Array.from({ length: n }, (_, i) => i);
            this.rank = Array(n).fill(0);
        }

        find(x) {
            if (this.parent[x] !== x) {
                this.parent[x] = this.find(this.parent[x]);
            }
            return this.parent[x];
        }

        union(x, y) {
            let px = this.find(x);
            let py = this.find(y);

            if (px === py) return false;

            if (this.rank[px] < this.rank[py]) {
                [px, py] = [py, px];
            }

            this.parent[py] = px;

            if (this.rank[px] === this.rank[py]) {
                this.rank[px]++;
            }

            return true;
        }
    }

    const kruskal = (skipEdge, forceEdge) => {
        const dsu = new DSU(n);

        let weight = 0;
        let count = 0;

        if (forceEdge !== -1) {
            const [u, v, w] = edges[forceEdge];

            if (dsu.union(u, v)) {
                weight += w;
                count++;
            }
        }

        for (let i = 0; i < edges.length; i++) {
            if (i === skipEdge) continue;

            const [u, v, w] = edges[i];

            if (dsu.union(u, v)) {
                weight += w;
                count++;

                if (count === n - 1) break;
            }
        }

        return count === n - 1 ? weight : Infinity;
    };

    const mstWeight = kruskal(-1, -1);

    const critical = [];
    const pseudo = [];

    for (let i = 0; i < edges.length; i++) {

        // Critical?
        if (kruskal(i, -1) > mstWeight) {
            critical.push(edges[i][3]);
            continue;
        }

        // Pseudo-critical?
        if (kruskal(-1, i) === mstWeight) {
            pseudo.push(edges[i][3]);
        }
    }

    return [critical, pseudo];
};