/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if(n<1){
    return n
  }
  let prev2 = 0 //前面第二个数
  let prev1 = 1 //前面第一个数
  let result = 0  
  for(let i=2;i<=n;i++){
    result = prev1+prev2 //当前数等于前两个数的和
    // 往后一位
    prev2 = prev1 
    prev1 = result
  }
  return result
};