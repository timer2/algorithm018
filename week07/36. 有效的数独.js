/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let rows = {}
  let cols = {}
  let boxs = {}
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let num = board[i][j]
      if (num !== '.') {
        let boxIndex = parseInt(i / 3) * 3 + parseInt(j / 3)
        if (
          rows[i + '-' + num] ||
          cols[j + '-' + num] ||
          boxs[boxIndex + '-' + num]
        ) {
          return false
        }
        rows[i + '-' + num] = true
        cols[j + '-' + num] = true
        boxs[boxIndex + '-' + num] = true
      }
    }
  }
  return true
}
