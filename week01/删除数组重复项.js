/**
 *leetcode.26题
 * @param {*} nums
 */
var removeDuplicates = function (nums) {
  let len = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[len]) {
      len++
      nums[len] = nums[i]
    }
  }
  return len + 1
}
