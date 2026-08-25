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
var postorderTraversal = function (root) {
    if (!root) return [];
    const res = []

    const stack = [root]
    const visit = [false]

    while (stack.length) {
        const node = stack.pop()
        const visited = visit.pop()

        if (visited) {
            res.push(node.val)
        } else {
            //visit the node again but mark it true this time
            stack.push(node)
            visit.push(true)

            //do children
            if (node.right) {
                stack.push(node.right)
                visit.push(false)
            }
            if (node.left) {
                stack.push(node.left)
                visit.push(false)
            }
        }
    }

    return res
};