/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function(nums) {
    const n = nums.length;
    let res = new Array(n).fill(0);
    let map = new Map();

    for (let i = 0; i < n; i++) {
        if (!map.has(nums[i])) map.set(nums[i], []);
        map.get(nums[i]).push(i);
    }

    for (let [_, arr] of map) {
        const len = arr.length;

        // Left pass: for each arr[j], add arr[j]*j - sum(arr[0..j-1])
        let prefix = 0;
        for (let j = 0; j < len; j++) {
            res[arr[j]] += arr[j] * j - prefix;
            prefix += arr[j];
        }

        // Right pass: for each arr[j], add sum(arr[j+1..end]) - arr[j]*(len-1-j)
        let suffix = 0;
        for (let j = len - 1; j >= 0; j--) {
            res[arr[j]] += suffix - arr[j] * (len - 1 - j);
            suffix += arr[j];
        }
    }

    return res;
};