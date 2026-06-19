/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    const mergeSort = (arr,s,e) =>{
        if(s>=e) return arr

        const mid = Math.floor((s+e)/2)

        mergeSort(arr,s,mid)
        mergeSort(arr,mid+1,e)

        merge(arr,s,mid+1,e)

        return arr
    }

    return mergeSort(nums,0,nums.length-1)
};

function merge(arr,s,mid,e){
    let left = arr.slice(s,mid)
    let right = arr.slice(mid,e+1)

    const r = e - mid +1

    let i = 0
    let j = 0

    for(let k=s; k<=e; k++){
        if(left[i]<=right[j] || j>=r){
            arr[k] = left[i]
            i++
        } else{
            arr[k] = right[j]
            j++
        }
    }
}