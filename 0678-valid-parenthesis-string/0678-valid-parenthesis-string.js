var checkValidString = function (s) {
    if (s[0] === ")") return false

    // Idea: we don't decide what each '*' is. Instead, while reading the string left to right, we track a RANGE for how many '(' are still open (not yet closed):

    let minOpen = 0 // the fewest open '(' possible so far
    let maxOpen = 0 //the most open '(' possible so far.

    for (const c of s) {
        if (c === "(") {
            // one more open bracket, in every case
            minOpen++
            maxOpen++
        } else if (c === ")") {
            // this closes one open bracket, in every case
            minOpen--
            maxOpen--
        } else {
            // c is '*'
            minOpen-- // fewest open: treat '*' as ')'
            maxOpen++ // most open:   treat '*' as '('
        }

        // Even if we treat every '*' so far as '(', there are still more ')' than '('. That means we cannot fix it, because the string is like this - "*)))". Adding anything after it won't fix it.
        if (maxOpen < 0) return false

        // If minOpen went below 0, it means a '*' we treated as ')' didn't have a '(' before to close/pair. That choice was wrong, so we treat that '*' as empty instead, which brings minOpen back up to 0.
        // (Open brackets can never be negative.)
        minOpen = Math.max(minOpen, 0)
    }

    // In the end, if minOpen is 0, it means we could have a case where no open brackets are left, so we return true
    return minOpen === 0
};