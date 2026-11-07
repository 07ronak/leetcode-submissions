/**
 * @param {number[]} servers
 * @param {number[]} tasks
 * @return {number[]}
 */
var assignTasks = function (servers, tasks) {
    const n = servers.length;

    // Busy servers: [wt, idx, freeTime]
    const busy = new MinPriorityQueue({
        compare: (a, b) => {
            if (a[2] === b[2]) {
                if (a[0] === b[0]) {
                    return a[1] - b[1];
                }
                return a[0] - b[0];
            }
            return a[2] - b[2];
        }
    });

    // Available servers: [wt, idx]
    const available = new MinPriorityQueue({
        compare: (a, b) => {
            if (a[0] === b[0]) {
                return a[1] - b[1];
            }
            return a[0] - b[0];
        }
    });

    for (let i = 0; i < n; i++) {
        available.push([servers[i], i]);
    }

    const ans = [];
    let time = 0;

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];

        time = Math.max(time, i);

        // If no server is free, jump to earliest free time
        if (available.isEmpty()) {
            time = Math.max(time, busy.front()[2]);
        }

        // Move all finished servers into available heap
        while (!busy.isEmpty() && busy.front()[2] <= time) {
            const [wt, idx] = busy.pop();
            available.push([wt, idx]);
        }

        // Assign task to best available server
        const [wt, idx] = available.pop();

        ans.push(idx);

        // Server becomes busy until time + task
        busy.push([wt, idx, time + task]);
    }

    return ans;
};