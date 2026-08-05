/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    const map = new Map()
    const n = inorder.length

    for (let i = 0; i < n; i++) {
        map.set(inorder[i], i)
    }

    const dfs = (l, r) => {
        if (l > r) return null

        const val = postorder.pop()
        const root = new TreeNode(val)
        const mid = map.get(val)

        root.right = dfs(mid + 1, r)
        root.left = dfs(l, mid - 1)

        return root
    }

    return dfs(0, n - 1)
};