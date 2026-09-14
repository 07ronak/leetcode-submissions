/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
    const [a, b, c, d] = rec1;
    const [p, q, r, s] = rec2;

    const overlapX = a < r && p < c;
    const overlapY = b < s && q < d;

    return overlapX && overlapY;
};

