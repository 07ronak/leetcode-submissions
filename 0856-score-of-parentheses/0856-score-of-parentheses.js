/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
    //given string is valid
    let stack = []

    for (const c of s) {
        if (c === "(") {
            stack.push(c)
        } else {
            let val = 1
            if (stack.length && stack[stack.length - 1] !== "(") {
                val *= (stack.pop() * 2)
            }
            stack.pop() //remove the bracket
            while (stack.length && stack[stack.length - 1] !== "(") {
                val += stack.pop()
            }
            stack.push(val)
        }
    }
    
    return stack[0]
};