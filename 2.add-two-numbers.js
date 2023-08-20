/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const llnode = new ListNode();
  let currentNode = llnode;
  let carry = 0;

  while (l1 || l2) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;

    const sum = val1 + val2 + carry;

    carry = Math.floor(sum / 10);
    currentNode.next = new ListNode(sum % 10);
    currentNode = currentNode.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carry) {
    currentNode.next = new ListNode(carry);
  }
  return llnode.next;
};
// @lc code=end
