/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
    if (!root) return null

    if (root.right) {
        root.right.next = getNext(root.next)
    }

    if (root.left) {
        root.left.next = root.right ?? getNext(root.next)
    }

    connect(root.right)
    connect(root.left)

    return root
};

function getNext(node) {
    while (node) {
        if (node.left) return node.left
        if (node.right) return node.right
        node = node.next
    }
    return null
}