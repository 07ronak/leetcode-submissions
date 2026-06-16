/**
 * @param {string} s
 * @return {string}
 */
var processStr = function(s) {
    let stack =[]

    for(let c of s){
        if(c==="*"){
            stack.pop()
        } else if(c==="#"){
            stack = stack.concat(stack)
        } else if(c==="%"){
            stack.reverse()
        } else{
            stack.push(c)
        }
    }

    return stack.join("")
};