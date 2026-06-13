/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function(words, weights) {
    let arr = []

    for(let word of words){
        let sum = 0
        for(let c of word){
            sum += weights[c.charCodeAt(0)-97]
        }
        sum = sum % 26
        sum = 25-sum

        arr.push(String.fromCharCode(97 + sum))
    }

    return arr.join("")
};