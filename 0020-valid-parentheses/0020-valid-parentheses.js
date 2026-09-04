/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = []
    const map = new Map()
    map.set(")", "(")
    map.set("]", "[")
    map.set("}", "{")

    for (const c of s) {
        if (c === "[" || c === "(" || c === "{") {
            stack.push(c)
        } else {
            const open = map.get(c)
            if (stack[stack.length - 1] === open) {
                stack.pop()
            } else {
                return false
            }
        }
    }

    return stack.length === 0
};