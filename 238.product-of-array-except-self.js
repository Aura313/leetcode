/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  //Time Complexity: O(n)
  //Space Complexity: O(1)
  let arr = new Array(nums.length).fill(1);
  let leftProduct = 1;

  for (let i = 1; i < nums.length; i++) {
    leftProduct *= nums[i - 1];
    arr[i] *= leftProduct;
  }
  let rightProduct = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    rightProduct *= nums[i + 1];
    arr[i] *= rightProduct;
  }

  return arr;
};
// @lc code=end
