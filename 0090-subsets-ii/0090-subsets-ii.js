var subsetsWithDup = function (nums) {
    nums.sort((a, b) => a - b)
    const ans = [];
    const n = nums.length;

    function bt(index, arr) {
        ans.push([...arr])

        for (let i = index; i < n; i++) {
            if (i > index && nums[i] === nums[i - 1]) {
                continue
            }

            arr.push(nums[i])
            bt(i + 1, arr)
            arr.pop()
        }
    }

    bt(0, []);

    return ans;
};