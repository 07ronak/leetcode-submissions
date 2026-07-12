/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    const n = inorder.length
    const map = new Map()

    for (let i = 0; i < n; i++) {
        map.set(inorder[i], i)
    }

    let idx = 0

    const helper = (l, r) => {
        if (l > r) return null

        const rootVal = preorder[idx++]
        const root = new TreeNode(rootVal)

        const mid = map.get(rootVal)

        root.left = helper(l, mid - 1)
        root.right = helper(mid + 1, r)

        return root
    }

    return helper(0, n - 1)
};