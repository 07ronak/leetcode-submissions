/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    const n = s.length

    let arr = [0,0,0]
    let count = 0
    let j = 0

    for(let i=0; i<n; i++){
        //add current val
        arr[s.charCodeAt(i)-97]++

        while(arr[0]>=1 && arr[1]>=1 && arr[2]>=1){
            count += n-i
            
            //remove jth element
            arr[s.charCodeAt(j)-97]--
            j++
        }
    }

    return count
};