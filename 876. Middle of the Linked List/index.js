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

let calcLength = function (head) {
  let length = 0;
  while (head) {
    length += 1;
    head = head.next;
  }
  return length;
};

let getMiddlePoint = function (head) {
  var length = calcLength(head);
  var middlePoint = length % 2 > 0 ? Math.ceil(length / 2) - 1 : length / 2;
  return middlePoint;
};

var middleNode = function (head) {
  let middleNumber = getMiddlePoint(head);
  if (head !== null) {
    for (let i = 0; i < middleNumber; i++) {
      head = head.next;
    }
    return head;
  }
};

middleNode([1, 2, 3, 4, 5]);
