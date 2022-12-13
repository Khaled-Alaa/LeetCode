/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const finalList = new ListNode(null);
  let fL = finalList;

  while (list1 !== null || list2 !== null) {
    if (list1 === null) {
      fL.next = list2;
      list2 = list2.next;
    } else if (list2 === null) {
      fL.next = list1;
      list1 = list1.next;
    } else if (list1.val < list2.val) {
      fL.next = list1;
      list1 = list1.next;
    } else {
      fL.next = list2;
      list2 = list2.next;
    }
    fL = fL.next;
  }
  return finalList.next;
};

mergeTwoLists([1, 2, 4], [1, 3, 4]);