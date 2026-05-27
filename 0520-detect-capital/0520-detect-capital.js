/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    const n = word.length
    if(n===1) return true

    let lower = /[a-z]/

    const check = (c) =>{
        if(c>="a" && c<="z") return true
        return false
    }

    if(check(word[0])){
        
        for(let i=1; i<n; i++){
            if(!check(word[i])) return false
        }

    } else{

        if(check(word[1])){
            for(let i=2; i<n; i++){
                if(!check(word[i])) return false
            }
        } else{
            for(let i=2; i<n; i++){
                if(check(word[i])) return false
            }
        }
    }

    return true
};