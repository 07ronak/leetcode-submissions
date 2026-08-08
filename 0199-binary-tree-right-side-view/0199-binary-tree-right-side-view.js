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
 * @return {number[]}
 */
var rightSideView = function (root) {
    if (!root) return []

    const ans = []
    const q = [root]
    let k = 0

    while (q.length > k) {
        const size = q.length - k

        for (let i = 0; i < size; i++) {
            const node = q[k++]

            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
        }
        ans.push(q[k - 1].val)
    }
    return ans
};