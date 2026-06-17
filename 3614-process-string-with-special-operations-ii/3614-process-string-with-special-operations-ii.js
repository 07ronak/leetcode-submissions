/**
 * @param {string} s
 * @param {number} k
 * @return {character}
 */
var processStr = function(s, k) {
    const n = s.length
    let len = 0

    for(let c of s){
        if(c==="*"){
            if(len>0){
                len--
            }
        } else if(c==="#"){
            len *= 2
        } else if(c!=="%"){
            len++
        }
    }

    if(k>=len) return "."

    for(let i=n-1; i>=0; i--){
        const c = s[i]

        if(c==="*"){
            len++
        } else if(c==="#"){
            const half = Math.floor(len/2)

            if(k>=half){
                k -= half
            }

            len = half
        } else if (c==="%"){
            k = len - k - 1
        } else{
            if(k+1===len){
                return c
            }
            len--
        }
    }
};