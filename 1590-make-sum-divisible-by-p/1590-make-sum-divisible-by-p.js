var minSubarray = function(nums, p) {
    const total = nums.reduce((a, b) => a + b, 0);
    const target = total % p;
    if (target === 0) return 0; // nothing to remove

    let map = new Map();
    map.set(0, -1);  // prefix mod before array starts

    let prefix = 0;
    let res = nums.length;

    for (let i = 0; i < nums.length; i++) {
        prefix = (prefix + nums[i]) % p;

        // We need prefix[j] such that:
        // (prefix[i] - prefix[j]) % p == target
        // => prefix[j] == (prefix[i] - target + p) % p
        let needed = (prefix - target + p) % p;

        if (map.has(needed)) {
            const j = map.get(needed);
            res = Math.min(res, i - j);
        }

        // store earliest index for this mod
        map.set(prefix, i);
    }

    return res === nums.length ? -1 : res;
};
