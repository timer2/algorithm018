// 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums, len, result = [], buffer = []) {
  len = len || nums.length
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (!buffer.includes(num)) {
      buffer.push(num)
    } else {
      continue
    }
    if (buffer.length === len) {
      result.push([...buffer])
    } else {
      permute(nums, len, result, buffer)
    }
    if (buffer.includes(num)) {
      buffer.pop()
    }
  }
  return result
}
