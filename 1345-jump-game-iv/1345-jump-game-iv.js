/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
    const n = arr.length;
    if (n === 1) return 0;

    const map = new Map();

    for (let i = 0; i < n; i++) {
        if (!map.has(arr[i])) map.set(arr[i], []);
        map.get(arr[i]).push(i);
    }

    const visited = new Array(n).fill(false);

    const queue = [0];
    let head = 0;
    visited[0] = true;

    let steps = 0;

    while (head < queue.length) {
        let size = queue.length - head;

        for (let s = 0; s < size; s++) {
            const i = queue[head++];
            if (i === n - 1) return steps;

            if (i + 1 < n && !visited[i + 1]) {
                visited[i + 1] = true;
                queue.push(i + 1);
            }

            if (i - 1 >= 0 && !visited[i - 1]) {
                visited[i - 1] = true;
                queue.push(i - 1);
            }

            if (map.has(arr[i])) {
                for (const j of map.get(arr[i])) {
                    if (!visited[j]) {
                        visited[j] = true;
                        queue.push(j);
                    }
                }
                map.delete(arr[i]); // critical optimization
            }
        }

        steps++;
    }

    return -1;
};