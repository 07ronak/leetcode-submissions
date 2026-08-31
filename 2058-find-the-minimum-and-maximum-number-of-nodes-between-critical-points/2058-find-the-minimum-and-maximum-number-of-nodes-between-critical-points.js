var nodesBetweenCriticalPoints = function (head) {
    let prevPrev = head;
    let prev = head.next;

    let first = -1;
    let last = -1;
    let minDistance = Infinity;
    let index = 1;

    while (prev.next) {
        const curr = prev.next;

        const isCritical =
            (prev.val > prevPrev.val && prev.val > curr.val) ||
            (prev.val < prevPrev.val && prev.val < curr.val);

        if (isCritical) {
            if (first === -1) {
                first = index;
            } else {
                minDistance = Math.min(minDistance, index - last);
            }

            last = index;
        }

        prevPrev = prev;
        prev = curr;
        index++;
    }

    if (first === last) return [-1, -1];

    return [minDistance, last - first];
};