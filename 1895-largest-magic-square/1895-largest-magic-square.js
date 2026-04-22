/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestMagicSquare = function(grid) {
    const rows = grid.length
    const cols = grid[0].length

    let max = Math.min(rows,cols)

    for(let size = max; size>1; size--){
        for(let i=0; i<rows-size+1; i++){
            for(let j=0; j<cols-size+1; j++){
                if(isMagic(grid,i,j,size)) return size
            }
        }
    }

    return 1
};

function isMagic(grid,r,c,size){
    //first row sum
    let sum = 0
    for(let i=0; i<size; i++){
        sum += grid[r][c+i]
    }
    //console.log(sum)
    let d1 = 0
    let d2 = 0
    //check diagonal first
    for(let i=0; i<size; i++){
        d1 += grid[r+i][c+i]
        d2 += grid[r+i][c+size-i-1]
    }
    //console.log(d1,"and",d2)
    if(d1!==sum) return false
    if(d2!==sum) return false

    for(let j=0; j<size; j++){
        let col = 0
        for(let i=0; i<size; i++){
            col += grid[i+r][c+j]
        }
        if(col!==sum) return false
    }

    for(let i=1; i<size; i++){
        let row = 0
        for(let j=0; j<size; j++){
            row += grid[i+r][c+j]
        }
        if(row!==sum) return false
    }

    return true
}