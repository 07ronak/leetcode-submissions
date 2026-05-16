/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function(poured, query_row, query_glass) {
    if(poured===0) return 0

    let arr = new Array(query_row+1).fill(0)

    arr[0] = poured

    for(let i=0; i<query_row; i++){
        for(let j=i; j>=0; j--){
            let excess = Math.max(0,arr[j] - 1)
            arr[j] = excess/2
            arr[j+1] += excess/2
        }
    }

    return Math.min(1,arr[query_glass])
};