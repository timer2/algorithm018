/**
 *leetcode.283题
 * @param {*} nums
 */
// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]
var moveZeroes = function (nums) {
  for (let i = nums.length; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
    }
  }
  console.log('nums', nums)
  return nums
}
moveZeroes([0, 1, 0, 3, 12])
