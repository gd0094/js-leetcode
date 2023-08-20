/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if(prices.length===0){
      return 0
  }
  let profit=0,peak=0,valley=0
  let i=0
  while(i<prices.length-1){
      // 找谷底
      while(i<prices.length-1 && prices[i]>=prices[i+1]){
        console.log('下',i, prices[i])
          i++
          
      }
      valley = prices[i]
      // 找山顶
      while(i<prices.length-1 && prices[i]<=prices[i+1]){
        console.log('上',i,prices[i])
          i++
          
      }
      peak = prices[i]
      profit += peak-valley
  }
  return profit
};
let prices = [7,1,5,3,6,4]
maxProfit(prices)