
var minSumSquareDiff = function (nums1, nums2, k1, k2) {
    const map = new Map();
    let k = k1 + k2;

    for (let i = 0; i < nums1.length; i++) {
        const diff = Math.abs(nums1[i] - nums2[i]);
        map.set(diff, (map.get(diff) || 0) + 1);
    }

    const arr = Array.from(map.entries())
        .sort((a, b) => b[0] - a[0]);

    const total = arr.reduce(
        (sum, [diff, count]) => sum + diff * count, 0
    );

    if (k >= total) return 0;

    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        const diff = arr[i][0];
        count += arr[i][1];

        const next = i + 1 < arr.length ? arr[i + 1][0] : 0;
        const needed = (diff - next) * count;

        if (k >= needed) {
            k -= needed;
            arr[i][1] = 0;
        } else {
            const reduce = Math.floor(k / count);
            const remainder = k % count;
            const level = diff - reduce;

            let result =
                (count - remainder) * level * level +
                remainder * (level - 1) * (level - 1);

            for (let j = i + 1; j < arr.length; j++) {
                result += arr[j][0] ** 2 * arr[j][1];
            }

            return result;
        }
    }

    return 0;
};
