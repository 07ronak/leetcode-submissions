var checkOverlap = function (radius, xCenter, yCenter, x1, y1, x2, y2) {
    const r = radius ** 2

    for (let i = x1; i <= x2; i++) {
        const disX = Math.abs(xCenter - i) ** 2
        for (let j = y1; j <= y2; j++) {
            const disY = Math.abs(yCenter - j) ** 2
            if(r >= disX + disY) return true
        }
    }

    return false
};