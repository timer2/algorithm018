/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  for (let i = 0, max = 0; i < nums.length; i++) {
    if (i <= max) {
      max = Math.max(max, i + nums[i])
    } else {
      return false
    }
  }
  return true
}
