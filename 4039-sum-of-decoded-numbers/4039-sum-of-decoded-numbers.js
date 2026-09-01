/**
 * @param {number[]} nums
 * @return {number}
 */
var sumDecoded = function(nums) {
    let r = 0n;
    const MOD = 1000000007n;

    for (const num of nums) {
        const s = num.toString();

        const tempWidth = s[s.length - 1];
        const tempD = s.slice(0, -1);

        const width = Number(tempWidth);

        const x = tempD.slice(0, width);
        const y = tempD.slice(width);

        const xInt = BigInt(x);
        const yInt = BigInt(y);

        r += modPow(xInt, yInt, MOD);
        r %= MOD;
    }

    return Number(r);
}

function modPow(x, y, mod) {
    let result = 1n;
    x %= mod;

    while (y > 0n) {
        if (y % 2n === 1n) {
            result = (result * x) % mod;
        }

        x = (x * x) % mod;
        y /= 2n;
    }

    return result;
}