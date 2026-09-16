var numberOfSets = function (n, k) {
    const MOD = 1000000007n;

    function modPow(a, b) {
        let res = 1n;

        while (b > 0n) {
            if (b & 1n) {
                res = (res * a) % MOD;
            }

            a = (a * a) % MOD;
            b >>= 1n;
        }

        return res;
    }

    function nck(n, k) {
        let numerator = 1n;
        let denominator = 1n;

        for (let i = 1; i <= k; i++) {
            numerator = (numerator * BigInt(n - i + 1)) % MOD;
            denominator = (denominator * BigInt(i)) % MOD;
        }

        return numerator * modPow(denominator, MOD - 2n) % MOD;
    }

    return Number(nck(n + k - 1, 2 * k));
};