/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    const n = s.length
    const m = goal.length

    if(m!==n) return false

    for(let i=0; i<n; i++){
        if(s[0]===goal[i]){
            let j = 0
            while(j<n){
                if(s[j]!==goal[(i+j)%n]) break
                j++
            }
            if(j===n) return true
        }
    }

    return false
};