var serialize = function (root) {
  const res = [];

  function preorder(node) {
    if (!node) {
      res.push("N");
      return;
    }
    res.push(node.val.toString());
    preorder(node.left);
    preorder(node.right);
  }

  preorder(root);
  return res.join(",");
};

var deserialize = function (data) {
  const nodeValues = data.split(",");
  let i = 0;

  function buildTree() {
    if (nodeValues[i] === "N") {
      i++;
      return null;
    }
    const node = new TreeNode(parseInt(nodeValues[i]));
    i++;
    node.left = buildTree();
    node.right = buildTree();
    return node;
  }

  return buildTree();
};
