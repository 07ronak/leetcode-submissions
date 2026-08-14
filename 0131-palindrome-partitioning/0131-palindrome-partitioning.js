/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    const n = s.length
    const res = []

    bt([], 0)
    return res

    function bt(arr, idx) {
        if (idx === n) {
            res.push([...arr])
        }

        for (let i = idx; i < n; i++) {
            if (isPal(idx, i)) {
                arr.push(s.substring(idx, i + 1))
                bt(arr, i + 1)
                arr.pop()
            }
        }
    }

    function isPal(l, r) {
        while (r > l) {
            if (s[l] !== s[r]) return false
            l++
            r--
        }

        return true
    }
};

