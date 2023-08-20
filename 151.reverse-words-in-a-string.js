/*
 * @lc app=leetcode id=151 lang=javascript
 *
 * [151] Reverse Words in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  //  Overall Time Complexity: O(n)
  //Overall Space Complexity: O(n) (for storing the intermediate and final strings/arrays).
  let x = s.trim().split(/\s+/);
  return x.reverse().join(' ');
};
// @lc code=end
