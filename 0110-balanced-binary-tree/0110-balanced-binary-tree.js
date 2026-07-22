var isBalanced = function (root) {
    if (!root) return true;

    const dfs = (node) => {
        if (!node) return [true, 0];

        const left = dfs(node.left);
        if (!left[0]) return [false, 1];

        const right = dfs(node.right);
        if (!right[0]) return [false, 1];

        const balanced = Math.abs(left[1] - right[1]) <= 1;

        return [balanced, 1 + Math.max(left[1], right[1])];
    };

    return dfs(root)[0];
};