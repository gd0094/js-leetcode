/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  function search(b, w, c, r) {
    console.log(b, w, c, r)
    if (w == "") return true;
    if (c < 0 || c >= b.length || r < 0 || r >= b[c].length) {
      return false;
    }
    if (b[c][r] != w[0]) return false;
    let temp = b[c][r];
    b[c][r] = "#";
    if (
      search(b, w.slice(1), c + 1, r) ||
      search(b, w.slice(1), c - 1, r) ||
      search(b, w.slice(1), c, r + 1) ||
      search(b, w.slice(1), c, r - 1)
    ) {
      b[c][r] = temp;
      return true;
    } else {
      b[c][r] = temp;
      return false;
    }
  }
  for (let c = 0; c < board.length; c++) {
    for (let r = 0; r < board[0].length; r++) {
      if (board[c][r] === word[0]) {
        if (search(board, word, c, r)) {
          return true;
        }
      }
    }
  }
  return false
};
let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
let word = "ABCCED"
console.log(exist(board,word))