/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function (intervals) {
    const n = intervals.length
    if(n===1) return 1

    let count = 0

    intervals.sort((a, b) => {
        if(a[0]===b[0]){
            return b[1] - a[1]
        }

        return a[0] - b[0]
    });

    let i = 0
    let j = 1

    while(j<n){
        const [a,b] = intervals[i]
        const [c,d] = intervals[j]

        if(a<=c && d<=b){
            count++
            j++
        } else{
            i = j
            j++
        }
    }

    return n - count
};