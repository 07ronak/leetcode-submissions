/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    let count = 0, arr = [];
    let set = new Set();
    for(let i = 0; i < A.length; i++) {
        if(set.has(A[i])) count++;
        else set.add(A[i]);
        if(set.has(B[i])) count++;
        else set.add(B[i]);
        arr.push(count);
    }
    return arr;
};