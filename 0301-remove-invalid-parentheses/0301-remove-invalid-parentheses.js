/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
    let leftRem = 0
    let rightRem = 0

    // Find minimum removals required
    for (const c of s) {
        if (c === "(") {
            leftRem++
        } else if (c === ")") {
            if (leftRem > 0) {
                leftRem--
            } else {
                rightRem++
            }
        }
    }

    const res = new Set()
    const n = s.length

    bt(0, "", 0, leftRem, rightRem)

    return [...res]

    function bt(idx, str, balance, leftRem, rightRem) {
        if (idx === n) {
            if (
                balance === 0 &&
                leftRem === 0 &&
                rightRem === 0
            ) {
                res.add(str)
            }
            return
        }

        const c = s[idx]

        // Normal character: must keep it
        if (c !== "(" && c !== ")") {
            bt(idx + 1, str + c, balance, leftRem, rightRem)
            return
        }

        if (c === "(") {
            // Remove '('
            if (leftRem > 0) {
                bt(idx + 1, str, balance, leftRem - 1, rightRem)
            }

            // Keep '('
            bt(idx + 1, str + c, balance + 1, leftRem, rightRem)
        } else {
            // Remove ')'
            if (rightRem > 0) {
                bt(idx + 1, str, balance, leftRem, rightRem - 1)
            }

            // Keep ')' only if there's an unmatched '('
            if (balance > 0) {
                bt(idx + 1, str + c, balance - 1, leftRem, rightRem)
            }
        }
    }
}