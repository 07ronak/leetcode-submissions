/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    const aux = new Array(nums.length); // allocated ONCE, reused for every merge

    const mergeSort = (l, r) => {
        if (l >= r) return;
        const mid = Math.floor((l + r) / 2);
        mergeSort(l, mid);
        mergeSort(mid + 1, r);
        merge(nums, l, mid, r, aux);
    };

    mergeSort(0, nums.length - 1);
    return nums;
};

function merge(arr, start, mid, end, aux) {
    // copy just this range into the shared buffer
    for (let x = start; x <= end; x++) {
        aux[x] = arr[x];
    }

    let i = start;    // pointer into left half (inside aux)
    let j = mid + 1;  // pointer into right half (inside aux)
    let k = start;    // write pointer into arr

    while (i <= mid && j <= end) {
        arr[k++] = aux[i] <= aux[j] ? aux[i++] : aux[j++];
    }
    while (i <= mid) arr[k++] = aux[i++];
    while (j <= end) arr[k++] = aux[j++];
}