/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const n = nums.length

    k = k % n
    if(k===0) return

    reverse(nums,0,n-1)
    reverse(nums,0,k-1)
    reverse(nums,k,n-1)
};

function reverse(arr,left,right){
    while(right>left){
        let temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
        left++
        right--
    }
    return arr
}