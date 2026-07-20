/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    const arr = []

    for(const row of grid){
        for(const val of row){
            arr.push(val)
        }
    }
    
    const len = arr.length
    k = k % len
    const n = grid.length
    const m = grid[0].length
    let x = 0

    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            let idx = (len-k+x) % len
            grid[i][j] = arr[idx]
            x++
        }
    }

    return grid
};