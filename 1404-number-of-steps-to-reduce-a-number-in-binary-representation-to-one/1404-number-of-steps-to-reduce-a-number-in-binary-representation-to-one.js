const numSteps = s => {
    let steps = 0, carry = 0;

    for (let i = s.length - 1; i > 0; i--) {
        const bit = Number(s[i]);   // or s[i] === '1' ? 1 : 0
        
        if ((bit + carry) & 1) {
            steps += 2;
            carry = 1;
        } else {
            steps += 1;
        }
    }

    return steps + carry;
};