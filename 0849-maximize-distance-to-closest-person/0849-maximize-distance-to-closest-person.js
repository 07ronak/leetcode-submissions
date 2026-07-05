/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
    let lastOccupied = -1;
    let maxDistance = 0;

    for (let i = 0; i < seats.length; i++) {
        if (seats[i] !== 1) continue;

        if (lastOccupied === -1) {
            // Empty seats before the first occupied seat.
            maxDistance = i;
        } else {
            // Best position is the middle of two occupied seats.
            maxDistance = Math.max(
                maxDistance,
                Math.floor((i - lastOccupied) / 2)
            );
        }

        lastOccupied = i;
    }

    // Empty seats after the last occupied seat.
    maxDistance = Math.max(
        maxDistance,
        seats.length - 1 - lastOccupied
    );

    return maxDistance;
};