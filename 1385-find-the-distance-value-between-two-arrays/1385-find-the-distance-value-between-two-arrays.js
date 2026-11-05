/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
    arr2.sort((a, b) => a - b);
    const n = arr2.length;
    let ans = 0;

    for (const num of arr1) {
        let found = false
        for (let i = 0; i < n; i++) {
            if (Math.abs(num - arr2[i]) <= d) {
                found = true
                break
            } else {
                if (num + d < arr2[i]) {
                    break
                }
            }
        }
        if (!found) ans++
    }

    return ans
};