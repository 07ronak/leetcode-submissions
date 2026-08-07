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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if(!root, !subRoot) return true;

    if(isSameTree(subRoot, root)) return true;

    if(subRoot && root){
        return isSubtree(root.left,subRoot) || isSubtree(root.right,subRoot)
    }
    return false
};

function isSameTree(p,q){
    if(!p && !q) return true;

    if(p && q && p.val===q.val){
        return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)
    }else{
        return false;
    }
}