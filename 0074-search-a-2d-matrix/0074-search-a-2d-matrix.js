/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(arr, target) {
    const rows = arr.length
    const cols = arr[0].length

    let left = 0
    let right = rows - 1

    while(right>left){
        const mid = Math.ceil((left+right)/2)

        if(arr[mid][0]===target) return true

        if(arr[mid][0]>target){
            right = mid -1
        } else{
            left = mid
        }
    }

    if(arr[left][0]>target){
        return false
    }

    if(arr[left][cols-1]<target){
        return false
    }

    const r = left
    left = 0
    right = cols - 1 

    while(right>=left){
        const mid = Math.floor((left+right)/2)

        if(arr[r][mid]===target) return true

        if(arr[r][mid]>target){
            right = mid -1
        } else{
            left = mid +1
        }
    }

    return false
};