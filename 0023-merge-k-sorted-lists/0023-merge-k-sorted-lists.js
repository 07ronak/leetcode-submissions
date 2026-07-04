/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const n = lists.length
    if(n===0) return null
    if(n===1) return lists[0]

    while(lists.length>1){
        let merged = []
        for(let i=0; i<lists.length; i+=2){
            const l1 = lists[i]
            const l2 = lists[i+1] ? lists[i+1] : null

            merged.push(merge(l1,l2))
        }
        lists = merged
    }

    return lists[0]
};

function merge(l1,l2){
    let dummy = new ListNode(0)
    let curr = dummy

    while(l1 && l2){
        if(l1.val <= l2.val){
            curr.next = l1
            l1 = l1.next
        } else{
            curr.next = l2
            l2 = l2.next
        }
        curr = curr.next
    }

    if(l1) curr.next = l1
    if(l2) curr.next = l2

    return dummy.next
}