/**
 * @param {number[]} tasks
 * @param {number[]} shifts
 * @return {number[]}
 */
var countTasks = function(tasks, shifts) {
    const n = tasks.length
    const total = tasks.reduce((a,b)=>a+b,0)
    let ans = []
    let left = total
    let idx = 0
    let extra = 0

    for(let t of shifts){
        t += extra
        extra = 0
        if(t >= left){
            ans.push(0)
            left = total
            idx = 0
            continue
        }

        for(let i = idx; i<n; i++){
            const task = tasks[i]
            if(t >= task){
                idx = i + 1
                t -= task
                left -= task
                extra = 0
            } else {
                extra = t
                break
            }
        }

        ans.push(n - idx)
    }

    return ans
};