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
 * @return {boolean}
 */
var isValidBST = function (root) {
    return isValid(root, -Infinity, Infinity)
};

function isValid(node, leftBoundary, rightBoundary) {
    if (!node) return true

    if (node.val <= leftBoundary) return false
    if (node.val >= rightBoundary) return false

    return isValid(node.left, leftBoundary, node.val) && isValid(node.right, node.val, rightBoundary)
}