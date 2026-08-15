var makesquare = function (matchsticks) {
    const total = matchsticks.reduce((a, b) => a + b, 0);
    const n = matchsticks.length;

    if (total % 4 !== 0) return false;

    const side = total / 4;

    matchsticks.sort((a, b) => b - a);

    if (matchsticks[0] > side) return false;

    const sides = [0, 0, 0, 0];

    function bt(idx) {
        if (idx === n) {
            return true
        }

        const val = matchsticks[idx];

        for (let i = 0; i < 4; i++) {
            if (sides[i] + val > side) continue;

            if (i > 0 && sides[i] === sides[i - 1]) continue;

            sides[i] += val;

            if (bt(idx + 1)) return true;

            sides[i] -= val;

            // Symmetry pruning
            // this means that even putting this stick on empty side didn't work
            // therefore, it cannot work
            if (sides[i] === 0) break;
        }

        return false;
    }

    return bt(0);
};