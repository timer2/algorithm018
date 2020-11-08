/**
 *
 * @param {数的总个数} n
 * @param {取多少个} k
 * @param {最终结果} result
 * @param {每一项} buffer
 */
var combine = function (n, k, start = 1, result = [], buffer = []) {
  for (let i = start; i < n + 1; i++) {
    buffer.push(i)
    if (buffer.length === k) {
      result.push([...buffer])
    } else {
      combine(n, k, i + 1, result, buffer)
    }
    buffer.pop()
  }
  return result
}
