/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(arr) {
    let slow = 0
    let fast = 0

    while(true){
        slow = arr[slow]
        fast = arr[arr[fast]]

        if(fast===slow) break
    }

    fast = 0

    while(true){
        slow = arr[slow]
        fast = arr[fast]

        if(slow===fast){
            return slow
        }
    }
};