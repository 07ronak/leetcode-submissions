/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
var maxSideLength = function(mat, threshold) {
    const rows = mat.length
    const cols = mat[0].length

    let pre = Array.from({length: rows+1},()=> new Array(cols+1).fill(0))
    //console.log(pre)

    for(let r=1; r<=rows; r++){
        for(let c=1; c<=cols; c++){
            pre[r][c] = mat[r-1][c-1] + pre[r-1][c] + pre[r][c-1] - pre[r-1][c-1]
        }
    }
    //console.log(pre)
    let max = 0
    const min = Math.min(rows,cols)

    for(let size = 1; size<=min; size++){
        for(let r = 0; r+size<=rows; r++){
            for(let c = 0; c+size<=cols; c++){
                let sum = pre[r+size][c+size] - pre[r][c+size] - pre[r+size][c] + pre[r][c]
                if(sum<=threshold){
                    max = size
                    break
                }
            }
            if(max===size){
                break
            }
        }
        if(max!==size) break
    }

    return max
};