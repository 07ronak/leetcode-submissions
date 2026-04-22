/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestMagicSquare = function(grid) {
    const rows = grid.length
    const cols = grid[0].length

    const max = Math.min(rows,cols)

    for(let size=max; size>=2; size--){
        for(let row =0; row+size<=rows; row++){
            for(let col=0; col+size<=cols; col++){
                if(isMagic(grid,row,col,size)){
                    return size
                }
            }
        }
    }   

    return 1
};

function isMagic(grid,r,c,size){
    let sum = 0
    for(let i=0; i<size; i++){
        sum += grid[r][c+i]
    }

    //check diagonals first
    let dia1 = 0
    let dia2 = 0
    for(let i=0; i<size; i++){
        dia1 += grid[r+i][c+i]
        dia2 += grid[r+i][c+size-i-1]
    }
    if(dia1!== sum || dia2!==sum) return false

    //check rows
    for(let i=1; i<size; i++){
        let rs = 0
        for(let j=0; j<size; j++){
            rs += grid[r+i][c+j]
        }
        if(rs!==sum) return false
    }

    //check cols
    for(let i=0; i<size; i++){
        let cs = 0
        for(let j=0; j<size; j++){
            cs += grid[r+j][c+i]
        }
        if(cs!==sum) return false
    }
    return true
}