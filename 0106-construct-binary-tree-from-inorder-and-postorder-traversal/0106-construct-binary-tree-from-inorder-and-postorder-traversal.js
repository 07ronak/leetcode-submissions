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

    let idx = n - 1

    const helper = (l, r) => {
        if (l > r) return null

        const rootVal = postorder[idx--]
        const root = new TreeNode(rootVal)

        const mid = map.get(rootVal)

        root.right = helper(mid + 1, r)
        root.left = helper(l, mid - 1)

        return root
    }

    return helper(0, idx)
};