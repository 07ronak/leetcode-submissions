const { abs, max, min } = Math;

const maxBuilding = (num, r) => {
    r.push([1, 0]);
    r.sort(([a], [b]) => a - b);
    const n = r.length;

    for (let i = 1; i < n; i++)
        r[i][1] = yCap(r[i - 1], r[i]);

    for (let i = n - 2; i >= 0; i--)
        r[i][1] = yCap(r[i + 1], r[i]);

    let res = 0;
    for (let i = 1; i < n; i++)
        res = max(res, yPeak(r[i - 1], r[i]));

    return max(res, r[n - 1][1] + num - r[n - 1][0]);
};

const yCap = ([x1, y1], [x2, y2]) => min(y2, y1 + abs(x2 - x1));
const yPeak = ([x1, y1], [x2, y2]) => (y1 + y2 + x2 - x1) >> 1;