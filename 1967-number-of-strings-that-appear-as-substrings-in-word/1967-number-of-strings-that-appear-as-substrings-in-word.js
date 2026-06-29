/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    let count =0

    for(const p of patterns){
        if(word.includes(p)) count++
    }

    return count
};