/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const res = []

    function bt(len, start, arr) {
        if (len === k) {
            res.push([...arr])
            return
        }

        if (len > k) {
            return
        }

        for (let i = start; i <= n; i++) {
            arr.push(i)
            bt(len + 1, i + 1, arr)
            arr.pop()
        }
    }

    bt(0, 1, [])
    return res
};