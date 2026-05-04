var findAnagrams = function(s, p) {
    const n = s.length

    if(p.length > n) return []

    let goal = new Array(26).fill(0)

    for(let c of p){
        goal[c.charCodeAt(0) - 97]++
    }

    let matches = 0
    let scan = new Array(26).fill(0)
    let ans = []

    let left = 0
    let right = p.length

    for(let i = left; i < right; i++){
        scan[s.charCodeAt(i) - 97]++
    }

    for(let i = 0; i < 26; i++){
        if(scan[i] === goal[i]) matches++
    }

    if(matches === 26) ans.push(left)

    while (right < n) {
        // 1. Remove the character sliding out (left)
        let leftChar = s.charCodeAt(left) - 97;
        if (scan[leftChar] === goal[leftChar]) matches--; // It was a match, now it won't be
        scan[leftChar]--;
        if (scan[leftChar] === goal[leftChar]) matches++; // Check if it matches after decrement
        left++;

        // 2. Add the character sliding in (right)
        let rightChar = s.charCodeAt(right) - 97; // Use current right index
        if (scan[rightChar] === goal[rightChar]) matches--; 
        scan[rightChar]++;
        if (scan[rightChar] === goal[rightChar]) matches++;
        right++; // Now move right forward

        if (matches === 26) ans.push(left);
    }

    return ans
};