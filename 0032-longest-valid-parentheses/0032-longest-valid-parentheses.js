/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    let map = new Map()
    map.set(0, [0])
    const n = s.length
    const arr = new Array(n + 1)
    arr[0] = 0
    let max = 0
    let stack = []

    for (let i = 1; i <= n; i++) {
        const char = s[i - 1]
        if (char === "(") {
            stack.push(i)
        } else {
            stack.pop()
        }
        const val = arr[i - 1] + (char === "(" ? 1 : -1)
        if (val < 0) {
            arr[i] = 0
            map = new Map()
            map.set(0, [i])
            stack = []
        } else {
            arr[i] = val
            if (map.has(val)) {
                const idx = map.get(val)
                
                for (const j of idx) {
                    if (max >= (i - j)) break
                    if (stack.length && stack[stack.length - 1] > j) {
                        continue
                    }
                    max = Math.max(max, i - j)
                }
                idx.push(i)
            } else {
                map.set(val, [i])
            }
        }
    }
    
    return max
};

