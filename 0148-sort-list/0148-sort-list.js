/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if(!head) return null

    let arr = []

    let curr = head

    while(curr){
        arr.push(curr.val)
        curr = curr.next
    }

    arr.sort((a,b)=>a-b)

    let ans = new ListNode(arr[0])
    curr = ans

    for(let i=1; i<arr.length; i++){
        let newNode = new ListNode(arr[i])
        curr.next = newNode
        curr = curr.next
    }

    return ans
};