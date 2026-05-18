/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    let steps = 0
    const n = s.length
    let carry = 0

    for(let i=n-1; i>0; i--){
        const num = Number(s[i]) + carry

        if(num & 1){
            carry = 1
            steps+=2
        } else{
            steps +=1
        }
    }

    return steps + carry
};