/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
  if (num <= 0) {
    return false
  }
  let arr = [2, 3, 5]
  arr.forEach((item) => {
    while (num !== 1 && num % item === 0) {
      num /= item
    }
  })
  return num === 1
}
