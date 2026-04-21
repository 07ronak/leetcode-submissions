/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    const rows = grid.length
    const cols = grid[0].length
    let count = 0

    for(let i=0; i<rows-2; i++){
        for(let j=0; j<cols-2; j++){
            if(isMagic(grid,i,j)) count++
        }
    }

    return count
};

function isMagic(grid,r,c){

    if(grid[r+1][c+1] !==5) return false

    let set = new Set()

    for(let i=r; i<r+3; i++){
        for(let j=c; j<c+3; j++){
            let val = grid[i][j]
            if(val > 9 || val<1 ) return false
            if(set.has(val)) return false
            set.add(val)
        }
    }

    if((grid[r][c] + grid[r+2][c+2])!==10) return false

    if((grid[r+2][c] + grid[r][c+2])!==10) return false

    //row sums
    for(let i=r; i<r+3; i++){
        if((grid[i][c] + grid[i][c+1] + grid[i][c+2])!==15 ) return false
    }

    //col sums
    for(let j=c; j<c+3; j++){
        if((grid[r][j] + grid[r+1][j] + grid[r+2][j])!==15 ) return false
    }

    return true
}