/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    let set = new Set(["a","e","i","o","u"])
    const n = s.length
    
    let fm = {}

    for(let c of s){
        if(set.has(c)){
            fm[c] = (fm[c]||0) +1
        }
    }

    let arr = Object.entries(fm)
    arr.sort((a,b)=>b[1]-a[1])

    let y = s.split("")

    let idx = 0
    for(let i=0; i<n; i++){
        if(set.has(y[i])){
            while(arr[idx][1]===0){
                idx++
            }
            y[i] = arr[idx][0]
            arr[idx][1]--
        }
    }
    
    return y.join("")
};