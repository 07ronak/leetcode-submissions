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
            return true //this can be said because of check 1
            //we have divided the total sum by 4. that means each side must be of lenght - side
            // since we are never allowing to exceed that limit, we will reach end only when each side is equal
            // why?
            // say a side remains smaller than 'side', we would still continue with that ofc becuase it is not more
            //but since we divided the total into equal 4, some other stick will definitely cross the 'side' length mark, resulting false
            //thus, when we reach the end, all sides were equal, that's the only possibility
        }

        const val = matchsticks[idx];

        for (let i = 0; i < 4; i++) {
            if (sides[i] + val > side) continue; //check 1

            if (i > 0 && sides[i] === sides[i - 1]) continue; //just removing repeated checks

            sides[i] += val;

            if (bt(idx + 1)) return true;

            sides[i] -= val;

            // Symmetry pruning
            // this means that even putting this stick on empty side didn't work
            // therefore, it cannot work ....```read solution note```
            if (sides[i] === 0) return false
        }

        return false;
    }

    return bt(0);
};