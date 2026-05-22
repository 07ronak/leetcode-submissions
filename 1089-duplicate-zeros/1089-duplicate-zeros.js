/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    const n = arr.length
    let left = 0
    let right = n - 1

    while (right > left) {
        if (arr[left] === 0) {
            right--
        }
        left++
    }

    let i = n - 1

    // Special edge case
    if (left === right && arr[left] === 0) {
        arr[i] = 0
        i--
        right--
    }

    while (right >= 0) {
        arr[i] = arr[right]
        i--

        if (arr[right] === 0 && i >= 0) {
            arr[i] = 0
            i--
        }

        right--
    }
};