/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
    const n = s.length;
    const str = s + s;
    let ans = Infinity;

    for (let i = 0; i < n; i++) {
        ans = Math.min(ans, findMin(i, i + n - 1) + i);
    }

    return ans;

    function findMin(l, r) {
        let sum = 0;

        while (r > l) {
            const a = str.charCodeAt(l) - 97;
            const b = str.charCodeAt(r) - 97;
            const diff = Math.abs(a - b);
            sum += Math.min(diff, 26 - diff);
            r--;
            l++;
        }
        
        return sum;
    }
};
