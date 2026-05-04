/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length

    let l = 0;
    let r = n-1;

    while(r>l){
        for(let i=0; i<r-l; i++){
            const top= l;
            const bottom = r

            const topLeft = matrix[top][l+i] //store

            matrix[top][l+i] = matrix[bottom-i][l] //bottom left to top left

            matrix[bottom-i][l] = matrix[bottom][r-i] //bottom right to bottom left

            matrix[bottom][r-i] = matrix[top+i][r] //top right to bottom right

            matrix[top+i][r] = topLeft
        }
        r--
        l++
    }
};
