var smallestUniqueSubarray = function (nums) {
    const n = nums.length;
    const base = 100003;

    const prefix = new Int32Array(n + 1);
    const power = new Int32Array(n + 1);

    power[0] = 1;

    for (let i = 0; i < n; i++) {
        prefix[i + 1] = Math.imul(prefix[i], base) + nums[i];
        power[i + 1] = Math.imul(power[i], base);
    }

    const check = (len) => {
        const map = new Map();
        const p = power[len];

        for (let i = len; i <= n; i++) {
            const hash = (prefix[i] - Math.imul(prefix[i - len], p)) | 0;

            map.set(hash, !map.has(hash));
        }

        for (const unique of map.values()) {
            if (unique) return true;
        }

        return false;
    };

    if (check(1)) return 1;

    let low = 2, high = n;

    while (low < high) {
        const mid = (low + high) >> 1;

        if (check(mid)) high = mid;
        else low = mid + 1;
    }

    return low;
};