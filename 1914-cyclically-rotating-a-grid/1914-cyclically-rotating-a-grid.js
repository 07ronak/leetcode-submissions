/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var rotateGrid = function(grid, k) {
    const rows = grid.length
    const cols = grid[0].length

    let top = 0
    let left = 0
    let right = cols -1
    let bottom = rows -1

    while(bottom>=top && right>=left){
        const layer = []

        //top row
        for(let c=left; c<=right; c++){
            layer.push(grid[top][c])
        }

        //right column
        for(let r=top+1; r<=bottom; r++){
            layer.push(grid[r][right])
        }

        // bottom row
        if (top < bottom) {
            for (let j = right - 1; j >= left; j--) {
                layer.push(grid[bottom][j]);
            }
        }

        // left column
        if (left < right) {
            for (let i = bottom - 1; i > top; i--) {
                layer.push(grid[i][left]);
            }
        }

        const n = layer.length
        let newK = (k % n)

        let idx = 0
        //top row
        for(let c=left; c<=right; c++){
            grid[top][c] = layer[(idx+newK)%n]
            idx++
        }

        //right column
        for(let r=top+1; r<=bottom; r++){
            grid[r][right] = layer[(idx+newK)%n]
            idx++
        }

        // bottom row
        if (top < bottom) {
            for (let j = right - 1; j >= left; j--) {
                grid[bottom][j] = layer[(idx+newK)%n]
                idx++
            }
        }

        // left column
        if (left < right) {
            for (let i = bottom - 1; i > top; i--) {
                grid[i][left] = layer[(idx+newK)%n]
                idx++
            }
        }

        top++;
        bottom--;
        left++;
        right--;
    }

    return grid
};