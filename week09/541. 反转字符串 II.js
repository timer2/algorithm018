/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  if (k === 1) {
    return s
  }
  let result = ''
  let tamp = ''
  let dobulek = 2 * k
  for (let i = 0; i < s.length; i++) {
    const element = s[i]
    let kyu = i % dobulek
    if (kyu === 0) {
      result += tamp
      tamp = ''
    }
    if (kyu < k) {
      tamp = element + tamp
    } else {
      tamp = tamp + element
    }
  }
  return result + tamp
}
