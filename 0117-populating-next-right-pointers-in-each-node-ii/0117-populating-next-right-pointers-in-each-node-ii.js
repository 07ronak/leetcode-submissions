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

    if (root.left) {
        if (root.right) {
            root.left.next = root.right
        } else {
            let curr = root.next
            while (curr) {
                if (curr.left || curr.right) {
                    root.left.next = (curr.left ?? curr.right)
                    break
                } else {
                    curr = curr.next
                }
            }
        }
    }

    if (root.right) {
        let curr = root.next
        while (curr) {
            if (curr.left || curr.right) {
                root.right.next = (curr.left ?? curr.right)
                break
            } else {
                curr = curr.next
            }
        }
    }

    connect(root.right)
    connect(root.left)

    return root
};