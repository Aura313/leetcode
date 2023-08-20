/*
 * @lc app=leetcode id=334 lang=javascript
 *
 * [334] Increasing Triplet Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    
    // O(n) time complexity and O(1) space complexity
    let firstNumber = Infinity;
    let secondNumber = Infinity;

    for (let currentNumber of nums) {

        if (currentNumber > secondNumber && currentNumber > firstNumber) {
            return true;
        }
        if (currentNumber > firstNumber) {
            secondNumber = currentNumber;
        } else {
            firstNumber = currentNumber;
        }
    }
    return false;
};
// @lc code=end

