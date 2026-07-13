var connect = function(root) {
    if (!root) return null;

    function getNextChild(node) {
        while (node) {
            if (node.left) return node.left;
            if (node.right) return node.right;
            node = node.next;
        }
        return null;
    }

    if (root.left) {
        root.left.next = root.right || getNextChild(root.next);
    }

    if (root.right) {
        root.right.next = getNextChild(root.next);
    }

    // Right first, then left
    connect(root.right);
    connect(root.left);

    return root;
};