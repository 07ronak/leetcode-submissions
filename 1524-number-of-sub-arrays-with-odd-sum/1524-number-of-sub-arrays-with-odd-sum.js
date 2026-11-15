/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function (arr) {
    const MOD = 1000000007;

    let oddCount = 0;
    let evenCount = 0;
    let ans = 0;

    for (const num of arr) {
        if (num & 1) {
            ans += (evenCount % MOD);

            [oddCount, evenCount] = [evenCount, oddCount];
            oddCount++;
            ans++;

        } else {
            //parity doesn't change
            evenCount++;
            ans += (oddCount % MOD); 
        }
    }

    return (ans % MOD);
};