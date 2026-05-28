/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function(a, b) {
    if(a.includes(b)) return 1

    const n = a.length
    const m = b.length

    let times = Math.ceil(m/n) 
   
    for(let r=times; r<=times+1; r++){
        let str = a.repeat(r)
        if(str.includes(b)) return r
    }

    return -1
};