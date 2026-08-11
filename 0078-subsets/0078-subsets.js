var subsets = function (nums) {
    const ans = [];

    function bt(index, arr) {
        if (index === nums.length) {
            ans.push(arr);
            return;
        }

        bt(index + 1, [...arr, nums[index]]); // include
        bt(index + 1, arr);                   // exclude
    }

    bt(0, []);

    return ans;
};