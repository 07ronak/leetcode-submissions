/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const n = heights.length
    let stack = []
    let max = 0
    heights.push(0)

    for(let i=0; i<=n; i++){
        let curr = heights[i]

        while(stack.length && heights[stack[stack.length-1]] >= curr){
            let height = heights[stack.pop()]
            let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1
            max = Math.max(max, height*width)
            //console.log(max)
        }

        stack.push(i)
    }
    return max
};