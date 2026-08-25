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
var preorderTraversal = function (root) {
    const res = []
    const stack = []
    let curr = root

    while (curr || stack.length) {
        if (curr) {
            res.push(curr.val)
            stack.push(curr)
            curr = curr.left
        } else {
            curr = stack.pop()
            curr = curr.right
        }
    }

    return res
};