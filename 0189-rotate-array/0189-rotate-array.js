/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const n = nums.length
    k = k % n

    if(k===0) return

    rev(nums,0,n-1)

    rev(nums,0,k-1)
    rev(nums,k,n-1)
};

function rev(arr,l,r){
    while(r>l){
        let temp = arr[r]
        arr[r] = arr[l]
        arr[l] = temp
        r--
        l++
    }
    return arr
}