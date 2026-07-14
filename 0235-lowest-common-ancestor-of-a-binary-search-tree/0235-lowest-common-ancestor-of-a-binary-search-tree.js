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

    let curr = root

    while(true){
        if(curr.val > max){
            curr = curr.left
        } else if(curr.val < min){
            curr = curr.right
        } else{
            return curr
        }
    }
};