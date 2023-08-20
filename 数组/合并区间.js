/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if(intervals.length<2){
    return intervals
  }
  intervals.sort(function(a,b){
    return a[0]-b[0]
  })
  // 正在被合并的区间
  let curr = intervals[0]
  let result = []
   
  for(let interval of intervals){
    // 比较合并区间的结尾和当前字符的开头
    if(curr[1] >=  interval[0]){
      // 取较大者作为合并区间的结尾
      curr[1] = Math.max(curr[1],interval[1])
    }else{
      result.push(curr)
      curr=interval
    }
  }
  if(curr.length!==0){
    result.push(curr)
  }
  return result
};