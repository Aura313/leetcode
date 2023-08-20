/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {

  //Time Complexity: O(n)
  //Space Complexity: O(1)
  
  const vowels = 'aeiouAEIOU';
  let chars = s.split(''); // Convert string to array for swapping
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    while (start < end && !vowels.includes(chars[start])) {
      start++;
    }

    while (start < end && !vowels.includes(chars[end])) {
      end--;
    }

    // Swap the vowels
    let temp = chars[start];
    chars[start] = chars[end];
    chars[end] = temp;

    start++;
    end--;
  }

  return chars.join(''); // Convert array back to string
};
// @lc code=end
