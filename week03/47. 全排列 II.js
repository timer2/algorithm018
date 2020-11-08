// 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
/**
 * 这道题写的有问题，还未解出来
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (
  nums,
  start = 0,
  result = [],
  buffer = [],
  ready = [],
) {
  for (let i = start; i < nums.length; i++) {
    let num = nums[i]
    // if (buffer.includes(num)) {
    //   continue
    // }
    buffer.push(num)
    if (buffer.length === nums.length && !ready.includes(buffer.join(''))) {
      result.push(buffer)
      ready.push(buffer.join(''))
    } else {
      permuteUnique(nums, start + 1, result, buffer, ready)
    }
    buffer.pop()
  }
  return result
}
