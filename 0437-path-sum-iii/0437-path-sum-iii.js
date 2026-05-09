var pathSum = function(root, targetSum) {
    const prefixSums = new Map();
    prefixSums.set(0, 1);

    const dfs = (node, currentSum) => {
        if (!node) return 0;

        currentSum += node.val;
        let count = prefixSums.get(currentSum - targetSum) || 0;

        prefixSums.set(currentSum, (prefixSums.get(currentSum) || 0) + 1);
        count += dfs(node.left, currentSum);
        count += dfs(node.right, currentSum);
        prefixSums.set(currentSum, prefixSums.get(currentSum) - 1);

        return count;
    };

    return dfs(root, 0);
};