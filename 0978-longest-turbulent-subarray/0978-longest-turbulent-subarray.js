var maxTurbulenceSize = function(arr) {
    const n = arr.length
    let ans = 1;
    let cur = 1;
    let prevDiff = 0;

    for (let i = 1; i < n; i++) {
        const diff = arr[i] - arr[i - 1];

        if (diff === 0) {
            cur = 1;
        } else if (prevDiff * diff < 0) {
            // Sign alternates → extend turbulence
            cur++;
        } else {
            // Pattern breaks → start with the last two elements
            cur = 2;
        }

        prevDiff = diff;
        ans = Math.max(ans, cur);
    }

    return ans;
};