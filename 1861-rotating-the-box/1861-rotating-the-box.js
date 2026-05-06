/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function(boxGrid) {
    const rows = boxGrid.length
    const cols = boxGrid[0].length

    for(let row of boxGrid){
        let obs = cols -1

        for(let j=cols-1; j>=0; j--){
            if(row[j]==="*"){
                obs = j - 1
            }
            if(row[j]==="#"){
                if(j===obs){
                    obs--
                    continue
                }
                row[obs] = "#"
                row[j] = "."
                obs--
            }
        }
    }

    let ans = Array.from({length:cols},()=>new Array(rows).fill("."))

    for(let j=0; j<cols; j++){
        for(let i=0; i<rows; i++){
            ans[j][i] = boxGrid[rows-1-i][j]
        }
    }

    return ans
};