/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
var maxSideLength = function(mat, threshold) {
    const rows = mat.length
    const cols = mat[0].length
    let prefix = Array.from({length: rows+1},()=>new Array(cols+1).fill(0))

    for(let i=1; i<=rows; i++){
        for(let j=1; j<=cols; j++){
            prefix[i][j] = prefix[i-1][j] + prefix[i][j-1] + mat[i-1][j-1] - prefix[i-1][j-1]
        }
    }

    let max = Math.min(rows,cols)
    let ans = 0

    for(let size = 1; size<=max; size++){
        for(let i=0; i<rows-size+1; i++){
            let found = false
            for(let j=0; j<cols-size+1; j++){
                let sum = prefix[i+size][j+size] - prefix[i][j+size] - prefix[i+size][j] + prefix[i][j]

                if(sum<=threshold){
                    ans = size
                    found = true
                    break
                }  
            }
            if(found){
                break
            }
        }
    }

    return ans
};