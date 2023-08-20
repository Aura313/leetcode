/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const maxInt = Math.pow(2, 31) - 1;
  const minInt = Math.pow(2, 31) * -1;

  s = s.trim();
  let i = 0;
  let sign = 1;

  if (s[i] === '+' || s[i] === '-') {
    sign = s[i] === '+' ? 1 : -1;
    i++;
  }

  let num = 0;
  while(i < s.length && /^[0-9]$/.test(s[i])) {
    const digit = parseInt(s[i]);
    if(num > (maxInt - digit) /10) {
        return sign === 1 ? maxInt : minInt;
    }
    num = num * 10 + digit;
    i++;
  }

  return num * sign;
};
// @lc code=end
