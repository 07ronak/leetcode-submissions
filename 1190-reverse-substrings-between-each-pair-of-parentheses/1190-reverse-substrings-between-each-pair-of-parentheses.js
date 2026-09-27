/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
    const stack = [];
    let result = [];

    for (const char of s) {
        if (char === '(') {
            // Remember where the content inside this '(' starts
            stack.push(result.length);
        } else if (char === ')') {
            const start = stack.pop();
            
            //now take everything from index `start` to the end and reverse it
            const reversed = result.slice(start).reverse();

            result = [
                ...result.slice(0, start),
                ...reversed
            ];
        } else {
            result.push(char);
        }
    }

    return result.join('');
};