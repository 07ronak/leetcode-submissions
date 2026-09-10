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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const ans = []

    const dfs = (node) => {
        if(!node) return

        dfs(node.left)
        if(ans.length >= k){
            return
        }
        ans.push(node.val)
        dfs(node.right)
    }

    dfs(root)
    return ans[k-1]
};