/**
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 */
var minInterval = function (intervals, queries) {
    intervals.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1]
        }
        return a[0] - b[0]
    })

    const map = new Map()
    const n = queries.length

    for (let i = 0; i < n; i++) {
        if (!map.has(queries[i])) {
            map.set(queries[i], [])
        }
        map.get(queries[i]).push(i)
    }

    queries.sort((a, b) => a - b)
    const heap = new MinPriorityQueue((x) => x[0])
    //0th el represents length, and 1st is the end of the interval

    let i = 0
    const m = intervals.length
    const ans = new Array(n)
    for (const q of queries) {

        while (i < m && intervals[i][0] <= q) {
            const [start, end] = intervals[i]
            if (end >= q) {
                heap.push([end - start + 1, end])
            }
            i++
        }

        while (!heap.isEmpty() && heap.front()[1] < q) {
            heap.pop()
        }

        const value = heap.isEmpty() ? -1 : heap.front()[0]
        const indices = map.get(q)

        for (const idx of indices) {
            ans[idx] = value
        }
    }

    return ans
};