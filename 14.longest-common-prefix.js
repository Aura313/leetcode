/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) {
        return "";
    }
    console.log(strs, "str init")
    let prefix = strs[0];
    console.log(prefix, "pree")
    for(let i = 0; i < strs.length; i++) {
        while(strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0 , prefix.length - 1);
            if(prefix === "") {
                return "";
            }
        }
    }

    return prefix;
};
// @lc code=end

