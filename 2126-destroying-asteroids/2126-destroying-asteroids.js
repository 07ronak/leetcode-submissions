/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, aster) {
    aster.sort((a,b)=>a-b)
    let init = mass

    for(let a of aster){
        if(init>=a){
            init += a
        } else{
            return false
        }
    }

    return true
};