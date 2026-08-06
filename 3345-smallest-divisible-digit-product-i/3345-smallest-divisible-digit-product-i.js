/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function (n, t) {
    while (true) {
        if ((digitProduct(n) % t) === 0) {
            return n
        }
        n++
    }
};

function digitProduct(n) {
    let sum = 1

    while (n) {
        sum *= (n % 10)
        n = Math.floor(n / 10)
    }

    return sum
}