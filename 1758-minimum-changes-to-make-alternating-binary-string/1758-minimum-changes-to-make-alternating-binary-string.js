/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    const n = s.length

    let zCount = 0

    for(let i=0; i<n; i++){
        if(i&1){
            if(s[i]==="0"){
                zCount++
            }
        }else{
            if(s[i]==="1"){
                zCount++
            }
        }
    }

    return Math.min(zCount,n-zCount)
};