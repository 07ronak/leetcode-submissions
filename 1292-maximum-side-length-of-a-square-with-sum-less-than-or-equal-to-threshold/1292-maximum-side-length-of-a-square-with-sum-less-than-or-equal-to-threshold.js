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
    let ans = 0
    const max = Math.min(rows,cols)

    for(let size = 1; size<=max; size++){
        for(let r = 0; r+size<=rows; r++){
            for(let c = 0; c+size<=cols; c++){
                let sum = pre[r+size][c+size] - pre[r][c+size] - pre[r+size][c] + pre[r][c]
                if(sum<=threshold){
                    ans = size
                    break
                    // We found at least one square of this size whose sum <= threshold.
                    // Since we only need to know whether this size is possible,
                    // we can stop checking other positions for the same size
                    // and move on to testing a larger square.
                }
            }
            if(ans===size){
                break
                //same thing here
                // A valid square for this size has already been found.
                // No need to continue scanning more rows for this size,
                // so break and try the next larger size.
            }
        }
        if(ans!==size) break 
        // We scanned all positions and found no valid square of this size.
        // Since matrix values are non-negative, increasing the square size
        // can only keep the sum the same or increase it.
        // Therefore larger squares cannot satisfy the threshold either,
        // so we stop checking further sizes.
    }

    return ans
};