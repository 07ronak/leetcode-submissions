/**
 * @param {number} n
 * @return {number[]}
 */
/**
 * @param {number} n
 * @return {number[]}
 */
var beautifulArray = function(n) {
    let res = [1];

    while (res.length < n) {
        const temp = [];

        // odd numbers
        for (const x of res) {
            if (2 * x - 1 <= n) {
                temp.push(2 * x - 1);
            }
        }

        // even numbers
        for (const x of res) {
            if (2 * x <= n) {
                temp.push(2 * x);
            }
        }

        res = temp;
    }

    return res;
};