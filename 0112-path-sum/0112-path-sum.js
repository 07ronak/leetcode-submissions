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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    //top down approach
    if(!root) return false

    const dfs = (node,val) =>{
        if(!node){
            return false
        }

        val += node.val

        if(!node.left && !node.right){
            return val === targetSum
        }

        return (dfs(node.left,val) || dfs(node.right,val))
    }
    
    return dfs(root,0)
};