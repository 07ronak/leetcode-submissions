/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr) {
    const n = arr.length
    let zeros = 0

    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) zeros++
    }

    let j = n + zeros - 1

    for(let i=n-1; i>=0; i--){
        
        if(i===j) {
            j--
            continue
        }
        if (j < n) arr[j] = arr[i]

        if (arr[i] === 0) {
            j--
            if (j < n) arr[j] = 0
        }

        j--
    }
}