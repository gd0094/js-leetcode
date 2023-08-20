/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let result = 0
    for(let row=0;row<board.length;row++){
      for(let col=0;col<board[0].length;col++){
        if(board[row][col] === 'X'){
          // 判断上边和左边是不是X
          if(row>0 && board[row-1][col] === 'X'){
            continue
          }
          if(col>0 && board[row][col-1] === 'X'){
            continue
          }
          result++
        }
      }
    }
};