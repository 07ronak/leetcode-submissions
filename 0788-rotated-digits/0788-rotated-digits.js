/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function(n) {
    let set1 = new Set([2,5,6,9])
    let set2 = new Set([0,1,2,5,6,8,9])

    let count = 0

    for(let i=1; i<=n; i++){
        let num = i
        let diff = false
        while(num){
            let digit = num % 10
            if(!set2.has(digit)) break
            if(set1.has(digit)) diff = true
            num = Math.floor(num / 10)
        }
        if(num===0 && diff===true) count++
    }

    return count
};