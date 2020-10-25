/**
 *leetcode.189题
 * @param {*} nums
 */
// 输入: [1,2,3,4,5,6,7] 和 k = 3
// 输出: [5,6,7,1,2,3,4]
var rotate = function (nums, k) {
  let item
  for (let i = 0; i < k; i++) {
    item = nums.pop()
    nums.unshift(item)
  }
  return nums
}
