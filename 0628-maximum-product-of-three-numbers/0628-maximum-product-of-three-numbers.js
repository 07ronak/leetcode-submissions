/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    const arr = [-Infinity, -Infinity, -Infinity]

    const insert = (num) => {
        if (num > arr[0]) {
            arr[2] = arr[1]
            arr[1] = arr[0]
            arr[0] = num
        } else if (num > arr[1]) {
            arr[2] = arr[1]
            arr[1] = num
        } else {
            arr[2] = num
        }
    }

    const neg = [Infinity, Infinity]

    const insert2 = (num) => {
        if (num < neg[0]) {
            neg[1] = neg[0]
            neg[0] = num
        } else {
            neg[1] = num
        }
    }

    for (const num of nums) {
        if (num > arr[2]) {
            insert(num)
        }

        if (num < neg[1]) {
            insert2(num)
        }
    }

    return Math.max((arr[0] * arr[1] * arr[2]), (arr[0] * neg[0] * neg[1]))
};