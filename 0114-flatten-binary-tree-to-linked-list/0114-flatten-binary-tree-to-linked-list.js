var flatten = function(root) {
    if (!root) return;
    const nodes = [];
    
    function preorder(node) {
        if (!node) return;
        nodes.push(node);
        preorder(node.left);
        preorder(node.right);
    }
    
    preorder(root);
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].left = null;
        nodes[i].right = nodes[i + 1];
    }
};