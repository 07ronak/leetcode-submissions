/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    // Ensure nums1 is always the smaller array
    if (nums1.length > nums2.length) {
        return intersect(nums2, nums1);
    }

    let res = []
    let fm = {}
    
    for(let num of nums1){
        fm[num] = (fm[num]||0) +1
    }
    
    for(let num of nums2){
        if(fm[num]>0){
            res.push(num)
            fm[num]--
        }
    }
    return res
};