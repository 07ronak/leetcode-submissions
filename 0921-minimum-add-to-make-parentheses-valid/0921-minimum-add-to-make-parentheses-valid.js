/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
    let count = 0
    let open = 0

    for (const c of s) {
        if (c === "(") {
            count++
            open++
        } else {
            if (count && open) {
                count--
                open--
            } else {
                count++
            }
        }
    }

    return count
};