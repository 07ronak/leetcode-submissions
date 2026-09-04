/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if(s.length !== t.length) return false

    const count = new Array(26).fill(0)

    for (const c of s) {
        count[c.charCodeAt(0) - 97]++
    }

    for(const c of t){
        const idx = c.charCodeAt(0) - 97
        if(count[idx] === 0) return false
        count[idx]--
    }

    return true
};