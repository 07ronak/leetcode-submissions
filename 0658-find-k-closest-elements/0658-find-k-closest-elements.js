/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    const n = arr.length
    let left = 0
    let right= n-1
    let diff = Infinity
    let idx = -1

    while(right>=left){
        const mid = Math.floor((left+right)/2)

        let curr = arr[mid] - x

        if(curr<0){
            left = mid + 1
        } else{
            right = mid - 1
        }

        curr = Math.abs(curr)

        if(curr <= diff){
            diff = curr
            idx = mid
        }
    }

    left = Math.max(0,idx-k)
    right = Math.min(n-1,idx+k)

    while((right-left+1) > k){
        const dr = Math.abs(x-arr[right])
        const dl = Math.abs(x-arr[left])

        if(dr>=dl){
            right--
        } else{
            left++
        }
    }

    return arr.slice(left,right+1)
};