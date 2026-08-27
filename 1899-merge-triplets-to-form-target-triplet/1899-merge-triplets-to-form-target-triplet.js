/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function (triplets, target) {
    let a = false
    let b = false
    let c = false

    for (const [x, y, z] of triplets) {
        if (x === target[0] && y <= target[1] && z <= target[2]) {
            a = true
        }

        if (y === target[1] && x <= target[0] && z <= target[2]) {
            b = true
        }

        if (z === target[2] && x <= target[0] && y <= target[1]){
            c = true
        }
    }

    return (a && b && c)
};