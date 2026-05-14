var minOperations = function(s, k) {
    const n = s.length
    let ones = 0
    let zeros = 0

    // count 1s and 0s
    for(let c of s){
        if(c==="1") ones++
        if(c==="0") zeros++
    }

    let neededParity = zeros % 2

    /*---- Early Exits ----*/
    if(!zeros) return 0 // already all 1s
    if(k===1) return zeros // flip each zero individually
    if(k===n && ones) return -1 // flipping whole string can't reach all 1s if both zeros and ones exists
    if(k===zeros) return 1 // flip all zeros in one operation
    /*---------------------*/

    for (let t = 2; t <= n; t++) { // max operations needed is n (see explanation below)
        const totalFlips = k * t

        // Constraint 1: total flips must at least cover all zeros
        if (totalFlips < zeros) continue

        // Constraint 2: parity must match (see explanation below)
        if (totalFlips % 2 !== neededParity) continue

        // Constraint 3: enough non-flip opportunities must exist (see explanation below)
        if (t & 1) {
            if ((n - k) * t < ones) continue
        } else {
            if ((n - k) * t < zeros) continue
        }

        return t
    }

    return -1
};