/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
    const n = word.length
    if (n <= 8) return n
    if (n <= 16) return 8 + (n - 8) * 2
    if (n <= 24) return 8 + 16 + (n - 16) * 3
    return 8 + 16 + 24 + (n - 24) * 4
};