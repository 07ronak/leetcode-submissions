var maxPalindromes = function (s, k) {
    const n = s.length
    if (k === 1) return n

    const check = (l, r) => {
        while (r > l) {
            if (s[r] !== s[l]) return false
            r--
            l++
        }
        return true
    }

    let count = 0
    for (let i = 0; i <= n - k; i++) {
        if (check(i, i + k - 1)) {
            //check for smaller length
            count++
            i += k - 1
        } else if (i < n - k && check(i, i + k)) {
            //check for +1 length
            count++
            i += k
        }
    }

    return count
};