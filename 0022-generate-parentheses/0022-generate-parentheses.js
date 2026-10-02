/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const res = []
    bt("", 0, 0)
    return res

    function bt(str, open, close) {
        if (open > n || close > n) {
            return
        }

        if (open === n && close === n) {
            res.push(str)
            return
        }

        if (open === close) {
            bt(str + "(", open + 1, close)
        } else {
            bt(str + "(", open + 1, close)
            bt(str + ")", open, close + 1)
        }
    }
};