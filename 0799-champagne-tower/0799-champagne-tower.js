/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function(poured, query_row, query_glass) {
    if(poured===0) return 0

    let arr = Array.from({length:query_row+2},(_,i)=> new Array(i+1).fill(0))

    arr[0][0] = poured

    for(let i=0; i<=query_row; i++){
        for(let j=0; j<=i; j++){
            let amount = arr[i][j] -1
            if(amount>0){
                arr[i+1][j] += amount/2
                arr[i+1][j+1] += amount/2    
            }
        }
    }

    return Math.min(1,arr[query_row][query_glass])
};