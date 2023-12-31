/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let firstRowHasZero = false
  let firstColHasZero = false
  // 检查第一列是否有0
  for(let i=0;i<matrix.length;i++){
    if(matrix[i][0] === 0){
      firstColHasZero=true
    }
  }
  // 检查第一行是否有0
  for(let i=0;i<matrix[0].length;i++){
    if(matrix[0][i] === 0){
      firstRowHasZero=true
    }
  }
  // 使用第一行和第一列，来标记其余行列是否含有0
  for(let row=1;row<matrix.length;row++){
    for(let col=1;col<matrix[0].length;col++){
      if(matrix[row][col]===0){
        matrix[row][0]=0
        matrix[0][col]=0
      }
    }
  }
  // 利用第一行和第一列的标0情况，将matrix中的数字标0
  for(let row=1;row<matrix.length;row++){
    for(let col=1;col<matrix[0].length;col++){
      if(matrix[row][0]===0 || matrix[0][col]===0){
        matrix[row][col]=0
      }
    }
  }
  // 最后，处理第一行和第一列
  if(firstColHasZero){
    for(let i=0;i<matrix.length;i++){
      matrix[i][0]=0
    }
  }
  if(firstRowHasZero){
    for(let i=0;i<matrix[0].length;i++){
      matrix[0][i]=0
    }
  }
  return matrix
};