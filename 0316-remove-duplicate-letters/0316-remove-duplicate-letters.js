var removeDuplicateLetters = function(s) {
    const n = s.length

    let last = {}

    for(let i=0; i<n; i++){
        last[s[i]] = i
    }

    let stack = []
    let seen = new Set()

    for(let i=0; i<n; i++){
        let c = s[i]

        if(seen.has(c)) continue

        while(
            stack.length &&
            c < stack[stack.length-1] &&
            last[stack[stack.length-1]] > i
        ){
            seen.delete(stack.pop())
        }

        stack.push(c)
        seen.add(c)
    }

    return stack.join("")
}