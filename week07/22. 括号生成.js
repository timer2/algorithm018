/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = []
  const fn = (str, left, right) => {
    if (str.length === 2 * n) {
      res.push(str)
      return
    }
    if (left > 0) {
      fn(str + '(', left - 1, right)
    }
    if (right > left) {
      fn(str + ')', left, right - 1)
    }
  }
  fn('', n, n)
  return res
}
