/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const ans = []
    const n = candidates.length;

    bt([], 0, 0)
    return ans

    function bt(arr, sum, start) {
        if (sum === target) {
            ans.push([...arr])
            return
        }

        if (sum > target) {
            return
        }

        for (let i = start; i < n; i++) {
            arr.push(candidates[i])
            bt(arr, sum + candidates[i], i)
            arr.pop()
        }
    }
};