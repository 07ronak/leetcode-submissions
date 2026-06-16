/**
 * @param {string} s
 * @return {string}
 */
var processStr = function(s) {
    let res = ""

    for(let c of s){
        if(c==="*"){
            res = res.slice(0,-1)
        } else if(c==="#"){
            res += res
        } else if(c==="%"){
            res = res.split("").reverse("").join("")
        } else{
            res += c
        }
    }

    return res
};