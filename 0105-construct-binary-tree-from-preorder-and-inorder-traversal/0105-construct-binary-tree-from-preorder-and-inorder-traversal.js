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
    const n = inorder.length
    const map = new Map()
    
    for(let i=0; i<n; i++){
        map.set(inorder[i],i)
    }
    
    let idx = 0
    
    const dfs = (l,r) =>{
        if(l>r) return null
        
        const val = preorder[idx++]
        const root = new TreeNode(val)
        
        const mid = map.get(val)
        
        root.left = dfs(l,mid-1)
        root.right = dfs(mid+1,r)
        
        return root
    }
    
    return dfs(0,n-1)
};