/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    const n = height.length

    let left = 0
    let right = n-1

    let max = -Infinity

    while(right>left){
        const width = right-left
        const len = Math.min(height[left],height[right])
        max = Math.max(max,width*len)
        
        if(height[right]>height[left]){
            left++
        } else{
            right--
        }
    }

    return max
};