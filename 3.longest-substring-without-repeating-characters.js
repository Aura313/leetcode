/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const charIndxMap = new Map();
    let start = 0;
    let maxLen = 0;

    for(let end = 0; end < s.length; end++) {
        if(charIndxMap.has(s[end]) && charIndxMap.get(s[end]) >= start) {
            start = charIndxMap.get(s[end]) + 1;
        }
        charIndxMap.set(s[end], end);
        maxLen = Math.max(maxLen, end - start + 1)
    }
    return maxLen;
};
// @lc code=end

