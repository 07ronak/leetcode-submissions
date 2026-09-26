/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function (s, knowledge) {
    const map = new Map()

    for (const [key, val] of knowledge) {
        map.set(key, val)
    }

    let open = false
    let record = ""

    let res = ""

    for (const char of s) {
        if (char === "(") {
            open = true
        } else if (char === ")") {
            if (map.has(record)) {
                res += map.get(record)
            } else {
                res += "?"
            }
            open = false
            record = ""
        } else if (open) {
            record += char
        } else {
            res += char
        }
    }

    return res
};