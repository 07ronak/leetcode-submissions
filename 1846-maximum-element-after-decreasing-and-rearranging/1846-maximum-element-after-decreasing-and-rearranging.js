/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function(arr) {
    const n= arr.length
    let freq = new Array(n+1).fill(0)

    for(let num of arr){
        freq[Math.min(n,num)]++
    }

    let val = 1

    for(let i=2; i<=n; i++){
        val = Math.min(i,val+freq[i])
    }

    return val
};