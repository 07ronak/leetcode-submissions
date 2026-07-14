/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    const max = Math.max(p.val, q.val)
    const min = Math.min(p.val, q.val)

    const dfs = (node) => {
        if (!node || node === p || node === q) {
            return node
        }

        if (max < node.val) {
            return dfs(node.left)
        } else if (min > node.val) {
            return dfs(node.right)
        }

        return node
    }

    return dfs(root)
};