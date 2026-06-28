/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const n = nums1.length
    const m = nums2.length

    //force nums1 to be the smaller one
    if(m<n){
        return findMedianSortedArrays(nums2,nums1)
    }

    const total = n + m
    const half = Math.floor(total/2)

    //choosing the smaller array that is nums1 in our case

    let left = 0
    let right = n-1
    
    while(true){
        const mid = Math.floor((left+right)/2)
        const j = half - mid -2

        let Aleft = nums1[mid] ?? -Infinity
        let Aright = nums1[mid+1] ?? Infinity
        let Bleft = nums2[j] ?? -Infinity
        let Bright = nums2[j+1] ?? Infinity

        if(Aleft<=Bright && Bleft<=Aright){
            if(total&1){
                return Math.min(Aright,Bright)
            } else{
                return (Math.max(Aleft,Bleft) + Math.min(Aright, Bright))/2
            }
        }

        if(Aleft>Bright){
            right = mid -1
        } else{
            left = mid +1
        }
    }
};  