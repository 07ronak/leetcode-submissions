/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function(s) {
    let map = new Map() //storing last index
    const n = s.length

    for(let i=0; i<n; i++){
        map.set(s[i],i)
    }

    let stack = []
    let set = new Set()

    for(let i=0; i<n; i++){
        const curr = s[i]

        if(set.has(curr)) continue

        while(stack.length && stack[stack.length-1] > curr && map.get(stack[stack.length-1])>i){
            let top = stack.pop()
            set.delete(top)
        }
        
        stack.push(curr)
        set.add(curr)

    }

    return stack.join("")
};