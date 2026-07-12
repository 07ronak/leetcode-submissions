/**
* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }
*/
/**
* @param {number[]} preorder
* @param {number[]} inorder
* @return {TreeNode}
*/
var buildTree = function(preorder, inorder) {
   let preIdx = 0, inIdx = 0;
    
    function dfs(limit) {
        if (preIdx >= preorder.length) return null;
        if (inorder[inIdx] === limit) {
            inIdx++;
            return null;
        }
            
        let root = new TreeNode(preorder[preIdx++]);
        root.left = dfs(root.val);
        root.right = dfs(limit);
        return root;
        
    }
    return dfs(Infinity);
    
};
