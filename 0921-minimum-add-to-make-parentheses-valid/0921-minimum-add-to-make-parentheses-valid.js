/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
    let stack = []

    for (const c of s) {
        if (c === "(") {
            stack.push(c)
        } else {
            if (stack.length && stack[stack.length - 1] === "(") {
                stack.pop()
            } else {
                stack.push(c)
            }
        }
    }

    return stack.length
};