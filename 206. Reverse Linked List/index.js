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
var reverseList = function (head) {
  var tempList = null;
  var newList = null;

  while (head !== null) {
    tempList = head;
    //templist = 1,2,3,4,5 => 2,3,4,5 => 3,4,5 => 4,5 => 5
    head = head.next;
    //head = 2,3,4,5 => 3,4,5 => 4,5 => 5
    tempList.next = newList;
    //tempList.next = null => 2 => 3 => 4 => 5
    newList = tempList;
    //newList = 1 => 2,1 => 3,2,1 => 4,3,2,1 => 5,4,3,2,1
  }
  return newList;
};

reverseList([1, 2, 3, 4, 5]);
