var maxLength = function (nums) {
    let res = 2;
    let prodVal = 1;
    const n = nums.length;
    let start = 0,
        end = 0;

    const gcd = (a, b) => {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    };

    while (end < n) {
        while (gcd(prodVal, nums[end]) > 1) {
            prodVal = Math.floor(prodVal / nums[start]);
            start++;
        }
        prodVal *= nums[end];
        res = Math.max(res, end - start + 1);
        end++;
    }
    return res;
};