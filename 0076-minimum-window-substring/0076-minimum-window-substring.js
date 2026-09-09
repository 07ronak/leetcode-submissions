/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    const n = s.length
    const m = t.length

    if (m > n) return ""

    const tmap = new Map()
    for (const c of t) {
        tmap.set(c, (tmap.get(c) || 0) + 1)
    }

    const k = tmap.size

    let start = 0
    let len = Infinity

    let left = 0
    let count = 0
    const smap = new Map()

    for (let right = 0; right < n; right++) {
        const char = s[right]

        //add the current element
        smap.set(char, (smap.get(char) || 0) + 1)

        if (tmap.has(char) && smap.get(char) === tmap.get(char)) {
            count++
        }

        while (count === k) {
            if (right - left + 1 < len) {
                len = right - left + 1
                start = left
            }

            const leftChar = s[left++]
            smap.set(leftChar, smap.get(leftChar) - 1)

            if (tmap.has(leftChar) && smap.get(leftChar) < tmap.get(leftChar)) {
                count--
            }
        }
    }

    if (len === Infinity) {
        return ""
    }

    return s.slice(start, start+len)
};