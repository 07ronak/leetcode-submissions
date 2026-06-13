/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function(words, weights) {
    let str = ""

    
    for(let word of words){
        let sum = 0
        for(let c of word){
            sum += (weights[c.charCodeAt(0)-97])
        }
        //console.log(sum)
        str += String.fromCharCode(122 - (sum%26))
    }

    return str
};