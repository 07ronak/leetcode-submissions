var smallestUniqueSubarray = function (nums) {
    const n = nums.length;
    const base = 100003n;
    const MOD = 1000000007n;

    const check = (len) => {
        const map = new Map();
        let hash = 0n;
        let unique = 0;

        let power = 1n;

        for (let i = 1; i < len; i++) {
            power = (power * base) % MOD;
        }

        for (let i = 0; i < n; i++) {
            if (i >= len) {
                hash = (hash - BigInt(nums[i - len]) 
                    * power % MOD + MOD) % MOD;
            }

            hash = (hash * base + BigInt(nums[i])) % MOD;

            if (i >= len - 1) {
                const prev = map.get(hash) || 0;

                if (prev === 0) unique++;
                else if (prev === 1) unique--;

                map.set(hash, prev + 1);
            }
        }

        return unique > 0;
    };

    let low = 1, high = n;

    while (low < high) {
        const mid = (low + high) >> 1;

        if (check(mid)) high = mid;
        else low = mid + 1;
    }

    return low;
};