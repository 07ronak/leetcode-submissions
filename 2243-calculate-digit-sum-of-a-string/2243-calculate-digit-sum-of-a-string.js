/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s, k) {
    if (s.length <= k) return s

    while (s.length > k) {
        let temp = "";
        let sum = 0;
        let left = false;

        for (let i = 1; i <= s.length; i++) {
            sum += Number(s[i - 1])
            left = true;

            if ((i % k) === 0) {
                temp += `${sum}`;
                sum = 0;
                left = false;
            }
        }

        if (left) {
            temp += `${sum}`
        }

        s = temp
    }

    return s
};