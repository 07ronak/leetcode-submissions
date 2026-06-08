/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const n = s.length
    let times = []
    let stack = []

    let regex = /[0-9]/;
    let build = ""
    let num = ""

    for(let i=0; i<n; i++){
        if(regex.test(s[i])){
            if(build.length>0){
                stack.push(build)
                build = ""
            }

            num += s[i]
            continue
        }

        if(s[i]==="]"){

            if(build.length>0){
                stack.push(build)
                build = ""
            }

            let str = ""
            while(stack[stack.length-1]!=="["){
                str = stack.pop() + str 
            }

            stack.pop()
            stack.push(str.repeat(times.pop()))

        } else if(s[i]==="["){
            if(build.length>0){
                stack.push(build)
                build = ""
            }
            if(num.length>0){
                times.push(Number(num))
                num = ""
            }

            stack.push("[")
        } else{
            build += s[i]
        }
    }

    if(build.length>0){
        stack.push(build)
    }


    return stack.join("")
};