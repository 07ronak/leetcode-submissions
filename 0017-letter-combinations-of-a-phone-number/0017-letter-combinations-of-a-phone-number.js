/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const n = digits.length
    const map = new Map()

    map.set("2", ["a", "b", "c"])
    map.set("3", ["d", "e", "f"])
    map.set("4", ["g", "h", "i"])
    map.set("5", ["j", "k", "l"])
    map.set("6", ["m", "n", "o"])
    map.set("7", ["p", "q", "r", "s"])
    map.set("8", ["t", "u", "v"])
    map.set("9", ["w", "x", "y", "z"])

    const res = []
    bt(0, "")
    return res

    function bt(idx, str) {
        if (idx === n) {
            res.push(str)
            return
        }

        const letters = map.get(digits[idx])

        for (const letter of letters) {
            bt(idx + 1, str + letter)
        }
    }
};