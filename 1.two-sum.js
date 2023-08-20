/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const keyValMap = new Map();

  for(let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if(keyValMap.has(complement)) {
      return [keyValMap.get(complement), i]
    }
    keyValMap.set(nums[i], i)
  }
};
// @lc code=end
