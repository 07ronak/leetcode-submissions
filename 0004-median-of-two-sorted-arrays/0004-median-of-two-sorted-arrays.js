/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const n = nums1.length
    const m = nums2.length

    //force nums1 to be the smaller array
    if(n > m){
        return findMedianSortedArrays(nums2,nums1)
    }

    const total = n + m
    const half = Math.floor(total/2)

    let left = 0
    let right = n

    while(right>=left){
        const mid = left + Math.floor((right-left)/2)
        const j = half - mid

        const Aleft = nums1[mid-1] ?? -Infinity
        const Aright = nums1[mid] ?? Infinity
        const Bleft = nums2[j-1] ?? -Infinity
        const Bright = nums2[j] ?? Infinity

        if(Aleft<=Bright && Bleft<=Aright){
            //found the answer
            if(total & 1){
                return Math.min(Aright,Bright)
            } else{
                return (Math.max(Aleft,Bleft) + Math.min(Aright,Bright))/2
            }
        } else if(Aleft>Bright){
            right = mid -1
        } else{
            left = mid + 1
        }
    }
};