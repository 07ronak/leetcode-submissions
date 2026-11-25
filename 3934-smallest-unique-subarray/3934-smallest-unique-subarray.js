var smallestUniqueSubarray = function (nums) {
    const n = nums.length;
    const base = 100003;
    const MOD = 1000000007;

    const check = (len) => {
        const map = new Map();
        let hash = 0;
        let power = 1;

        for (let i = 0; i < len; i++) {
            power = (power * base) % MOD;
        }

        for (let i = 0; i < n; i++) {
            hash = (hash * base + nums[i]) % MOD;

            if (i >= len) {
                hash = (hash - nums[i - len] * power) % MOD;
                if (hash < 0) hash += MOD;
            }

            if (i >= len - 1) {
                map.set(hash, (map.get(hash) || 0) + 1);
            }
        }

        for (const count of map.values()) {
            if (count === 1) return true;
        }

        return false;
    };

    let low = 1, high = n;

    while (low < high) {
        const mid = (low + high) >> 1;

        if (check(mid)) high = mid;
        else low = mid + 1;
    }

    return low;
};