var construct = function (grid) {
    const build = (x, y, size) => {
        if (size === 1) {
            return new _Node(grid[x][y] === 1, true);
        }

        const half = size >> 1;
        const topLeft = build(x, y, half);
        const topRight = build(x, y + half, half);
        const bottomLeft = build(x + half, y, half);
        const bottomRight = build(x + half, y + half, half);

        if (
            topLeft.isLeaf &&
            topRight.isLeaf &&
            bottomLeft.isLeaf &&
            bottomRight.isLeaf &&
            topLeft.val === topRight.val &&
            topLeft.val === bottomLeft.val &&
            topLeft.val === bottomRight.val
        ) {
            return new _Node(topLeft.val, true);
        }

        return new _Node(false, false, topLeft, topRight, bottomLeft, bottomRight);
    };

    return build(0, 0, grid.length);
};