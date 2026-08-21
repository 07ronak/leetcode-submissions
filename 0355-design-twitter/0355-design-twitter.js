var Twitter = function () {
    this.users = new Map();   // follower -> Set of followees
    this.tweets = new Map();  // userId -> [{ tweetId, time }]
    this.time = 0;
};

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
   /*  if (!this.users.has(userId)) {
        this.users.set(userId, new Set())
    } */

    if (!this.tweets.has(userId)) {
        this.tweets.set(userId, [])
    }

    this.tweets.get(userId).push({
        id: tweetId,
        time: this.time++
    })
};

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
    const heap = new MinHeap1(10)
    const res = []

    //get user's own tweets
    if (this.tweets.has(userId)) {
        const tweets = this.tweets.get(userId)
        const n = tweets.length
        const start = Math.max(0, n - 10)

        for (let i = start; i < n; i++) {
            heap.add(tweets[i])
        }
    }

    //get followers's tweets
    if (this.users.has(userId)) {
        const people = this.users.get(userId)
        for (const acc of people) {
            if (!this.tweets.has(acc)) continue

            const tweets = this.tweets.get(acc)
            const n = tweets.length
            const start = Math.max(0, n - 10)

            for (let i = start; i < n; i++) {
                heap.add(tweets[i])
            }
        }
    }

    while (!heap.isEmpty()) {
        res.push(heap.remove().id)
    }

    res.reverse()

    return res
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
    if (!this.users.has(followerId)) {
        this.users.set(followerId, new Set());
    }

    this.users.get(followerId).add(followeeId);
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
    if (this.users.has(followerId)) {
        this.users.get(followerId).delete(followeeId);
    }
};


/**
 * Min Heap with maximum size = 10
 *
 * The smallest timestamp is always at the root.
 */
class MinHeap1 {
    constructor(limit) {
        this.heap = [];
        this.limit = limit;
    }

    add(tweet) {
        // Heap isn't full yet
        if (this.heap.length < this.limit) {
            this.heap.push(tweet);
            this.bubbleUp(this.heap.length - 1);
            return;
        }

        // Heap is full.
        // Root is the oldest tweet.
        if (tweet.time > this.heap[0].time) {
            this.heap[0] = tweet;
            this.bubbleDown(0);
        }
    }

    remove() {
        if (this.heap.length === 0) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const result = this.heap[0];

        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);

        return result;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);

            // Parent is already smaller
            if (this.heap[parent].time <= this.heap[index].time) {
                break;
            }

            this.swap(parent, index);
            index = parent;
        }
    }

    bubbleDown(index) {
        const n = this.heap.length;

        while (true) {
            let smallest = index;

            const left = 2 * index + 1;
            const right = 2 * index + 2;

            if (
                left < n &&
                this.heap[left].time < this.heap[smallest].time
            ) {
                smallest = left;
            }

            if (
                right < n &&
                this.heap[right].time < this.heap[smallest].time
            ) {
                smallest = right;
            }

            if (smallest === index) {
                break;
            }

            this.swap(index, smallest);
            index = smallest;
        }
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] =
            [this.heap[j], this.heap[i]];
    }
}