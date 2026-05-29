/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let h = 0
    let max = 0

    for(let diff of gain){
        h += diff
        max = Math.max(max,h)
    }

    return max
};