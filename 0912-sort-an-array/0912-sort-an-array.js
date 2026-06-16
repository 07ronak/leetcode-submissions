/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {

    const mergeSort = (arr,s,e) =>{
        if(s>=e){
            return arr
        }

        const mid = Math.floor((s+e)/2)

        mergeSort(arr,s,mid)
        mergeSort(arr,mid+1,e)

        merge(arr,s,mid,e)

        return arr
    }

    return mergeSort(nums,0,nums.length-1)
};

function merge(arr,s,mid,e){
    let left = arr.slice(s,mid+1)
    let right = arr.slice(mid+1,e+1)
    const l = mid - s + 1
    const r = e - mid

    let i=0
    let j=0
    let k = s

    while(i < l && j < r){
        if(left[i]<=right[j]){
            arr[k++] = left[i++]
        } else{
            arr[k++] = right[j++]
        }
    }

    while(i<l){
        arr[k++] = left[i++]
    }

    /* while(j<r){
        arr[k++] = right[j++]
    } */
}