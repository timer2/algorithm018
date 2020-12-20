/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums, dp = [1]) {
  for (let i = 1; (dp[i] = 1), i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      nums[i] > nums[j] && (dp[i] = Math.max(dp[i], dp[j] + 1))
    }
  }
  return nums.length < 2 ? nums.length : Math.max(...dp)
}
