/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const res = []

    bt("", 0, 0)
    return res

    function bt(str, open, close) {
        if (close > open) {
            return
        }

        if (str.length === (2 * n) && open === close) {
            res.push(str)
            return
        }

        if (open === close) {
            bt(str + "(", open + 1, close)
            return
        }

        if (open < n) {
            bt(str + "(", open + 1, close)
        }
        if (close < n) {
            bt(str + ")", open, close + 1)
        }
    }
};