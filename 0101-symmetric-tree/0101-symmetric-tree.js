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
var isSymmetric = function(root) {
    let k = 0
    let queue = [[root.left,root.right]]

    while(queue.length > k){
        const [a,b] = queue[k++]

        if(!a && !b) continue
        if(!a || !b) return false
        if(a.val !== b.val) return false

        queue.push([a.left,b.right])
        queue.push([a.right,b.left])
    }

    return true
};