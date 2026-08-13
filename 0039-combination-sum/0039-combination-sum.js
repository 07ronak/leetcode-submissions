/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let res = []
    const n = candidates.length

    function bt(start, sum, arr) {
        if (sum === target) {
            res.push([...arr])
            return
        }

        if (sum > target) {
            return
        }

        for (let i = start; i < n; i++) {
            arr.push(candidates[i])
            bt(i, sum + candidates[i], arr)
            arr.pop()
        }
    }

    bt(0, 0, [])
    return res
};