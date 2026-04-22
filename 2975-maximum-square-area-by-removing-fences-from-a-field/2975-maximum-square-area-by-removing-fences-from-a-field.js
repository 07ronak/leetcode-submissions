/**
 * @param {number} m
 * @param {number} n
 * @param {number[]} hFences
 * @param {number[]} vFences
 * @return {number}
 */
var maximizeSquareArea = function(m, n, hFences, vFences) {
    const MOD = 1000000007
    if(m===n) return ((n-1)**2) % MOD

    //now where m and n are not equal
    
    const hDiff = new Set()

    hFences.push(1)
    vFences.push(1)

    hFences.sort((a,b)=>a-b)
    vFences.sort((a,b)=>a-b)
    
    
    hFences.push(m)
    vFences.push(n)

    for(let i=0; i<hFences.length; i++){
        for(let j=i+1; j<hFences.length; j++){
            hDiff.add((hFences[j]-hFences[i]))
        }
    }
    
    let maxSide = -1
    for(let i=0; i<vFences.length; i++){
        for(let j=i+1; j<vFences.length; j++){
            const val = vFences[j]-vFences[i]
            if(hDiff.has(val)) maxSide = Math.max(maxSide, val)
        }
    }
    
    if (maxSide===-1) return -1

    return Number((BigInt(maxSide) * BigInt(maxSide)) % BigInt(MOD));
};