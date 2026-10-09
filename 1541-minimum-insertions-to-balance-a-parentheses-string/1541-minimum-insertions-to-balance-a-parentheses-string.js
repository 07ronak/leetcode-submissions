var minInsertions = function (s) {
    let ans = 0;   // insertions made so far
    let need = 0;  // ')' still required by unmatched '('

    for (const c of s) {
        if (c === "(") {
            // odd need => previous '(' has only one ')', patch it now
            if (need & 1) {
                ans++;      // insert ')'
                need--;
            }
            need += 2;
        } else {
            need--;
            if (need < 0) { // ')' with no '(' available
                ans++;      // insert '('
                need = 1;   // that '(' still needs one more ')'
            }
        }
    }

    return ans + need;
};