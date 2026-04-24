/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let choice = 0
    let pos = 0

    for(let move of moves){
        if(move==="L"){
            pos--
        }else if(move==="R"){
            pos++
        } else{
            choice++
        }
    }

    if(pos<0){
        pos -= choice
    } else{
        pos += choice
    }

    return Math.abs(pos)
};