/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function(n, meetings) {
    const m = meetings.length

    meetings.sort((a,b)=> a[0]-b[0])

    const times = new Array(n).fill(0)
    const meet = new Array(n).fill(0)

    for(let [start,end] of meetings){
        let roomIdx = -1
        let isFree = false
        let min = Infinity

        for(let i=0; i<n; i++){
            let et = meet[i]
            
            if(et<=start){
                isFree = true
                roomIdx = i
                break
            } else{
                if(et<min){
                    min = et
                    roomIdx = i
                }
            }
        }

        if(isFree){
            meet[roomIdx] = end
        } else{
            meet[roomIdx] += (end-start)
        }

        times[roomIdx]++
    }

    let max = times[0]
    let idx = 0

    for(let i=1; i<n; i++){
        if(times[i]>max){
            max = times[i]
            idx = i
        }
    }

    return idx
};