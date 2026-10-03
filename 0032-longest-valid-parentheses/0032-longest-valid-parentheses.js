/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    const n = s.length
    let max = 0
    let stack = [-1]

    for (let i = 0; i < n; i++) {
        if (s[i] == "(") {
            stack.push(i)
        } else {
            stack.pop()
            if (stack.length === 0) {
                stack.push(i)
            }
            else {
                max = Math.max(max, i - stack[stack.length - 1])
            }
        }
    }

    return max
};