var combine = function(n, k) {
    const result = [];

    function backtrack(start, current) {
        // Base case: combination complete
        if (current.length === k) {
            result.push([...current]);
            return;
        }

        for (let i = start; i <= n; i++) {
            current.push(i);           // choose
            backtrack(i + 1, current); // explore
            current.pop();             // unchoose
        }
    }

    backtrack(1, []);
    return result;
};