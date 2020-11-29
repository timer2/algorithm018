/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let len = s.length
  let cur = 0
  let dp = new Array(len)
  for (let i = 0; i < len; i++) {
    for (let j = 0; j <= i; j++) {
      if (s[i] === s[j] && (i - j <= 1 || dp[j + 1])) {
        dp[j] = true
        cur++
      } else {
        dp[j] = false
      }
    }
  }
  return cur
}
