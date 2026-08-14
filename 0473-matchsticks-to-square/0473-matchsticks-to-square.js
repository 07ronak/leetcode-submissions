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
            return sides[0] === side &&
                sides[1] === side &&
                sides[2] === side &&
                sides[3] === side;
        }

        const val = matchsticks[idx];

        for (let i = 0; i < 4; i++) {
            if (sides[i] + val > side) continue;

            sides[i] += val;

            if (bt(idx + 1)) return true;

            sides[i] -= val;

            // Symmetry pruning
            if (sides[i] === 0) break;
        }

        return false;
    }

    return bt(0);
};