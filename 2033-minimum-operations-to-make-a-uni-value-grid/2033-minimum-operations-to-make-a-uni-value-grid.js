/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function(grid, x) {
    let arr = []

    for(let row of grid){
        for(let val of row){
            arr.push(val)
        }
    }

    arr.sort((a,b)=>a-b)

    const rem = (arr[0] % x)
    const n = arr.length
    const mid = arr[Math.floor(n/2)]

    let count = 0
    for(let val of arr){
        count += Math.abs(mid-val) / x
        if((val%x)!==rem) return -1
    }

    return count
};