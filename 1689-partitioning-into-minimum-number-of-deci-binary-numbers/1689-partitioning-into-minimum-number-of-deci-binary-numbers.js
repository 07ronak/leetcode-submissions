/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    let max = 0

    for(let c of n){
        max = Math.max(max,Number(c))
    }

    return max
};