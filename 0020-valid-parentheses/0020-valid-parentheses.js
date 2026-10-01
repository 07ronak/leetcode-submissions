/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const map = new Map()
    map.set("]", "[")
    map.set("}", "{")
    map.set(")", "(")

    let stack = []

    for (let char of s) {
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char)
        } else {
            const b = map.get(char)

            if (stack[stack.length - 1] === b) {
                stack.pop()
            } else {
                return false
            }
        }
    }

    return stack.length === 0
};