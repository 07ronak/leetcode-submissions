/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
    let ans = root.val

    const dfs = (node) => {
        if (!node) return 0

        const left  = dfs(node.left)
        const right = dfs(node.right)

        const val = Math.max(node.val + left, node.val + right, node.val)
        ans = Math.max(ans, val, right + left + node.val)

        return (val)
    }

    dfs(root)
    return ans
};