/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  function search(b, w, c, r) {
    if (w == "") return true;
    if (c < 0 || c > b.length || r < 0 || c > b[0].length) {
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
      } else {
        return false;
      }
    }
  }
};
