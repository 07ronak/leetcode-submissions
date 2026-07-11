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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if(!root) return null;

    if(root.val > key){
        root.left = deleteNode(root.left,key)
    } else if(root.val < key){
        root.right = deleteNode(root.right,key)
    } else{
        //found the element
        if(!root.left) return root.right
        if(!root.right) return root.left

        //has two children
        const val = findMin(root.right)
        root.val = val
        root.right = deleteNode(root.right,val)
    }

    return root
};

function findMin(node){
    while(node.left){
        node = node.left
    }
    return node.val
}