/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minOperations = function(s, k) {
    const n = s.length

    let ones = 0
    let zeros = 0

    for(let i=0; i<n; i++){
        if(s[i]==="0"){
            zeros++
        } else{
            ones++
        }
    }

    if(zeros===0) return 0
    if(k===zeros) return 1
    if(k===1) return zeros


    const neededParity = zeros%2

    //1's need to be flipped even no of times
    //0's need to be flipped odd no of times

    for(let t=1; t<=n; t++){
        const flipped = k*t

        if(zeros>flipped) continue

        if(neededParity!==(flipped%2)) continue

        const nonFlipOpp = t *(n-k)

        if(t&1){
            if(nonFlipOpp<ones) continue
        } else{
            if(nonFlipOpp<zeros) continue
        }

        return t
    }

    return -1
};