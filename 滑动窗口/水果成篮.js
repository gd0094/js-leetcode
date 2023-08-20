/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
  const map = new Map()
  let max = 1
  let j=0
  for(let i=0;i<tree.length;i++){
    map.set((tree[i],i))
    if(map.size>2){
      // 初始值
      let minIndex = tree.length-1
      // 找到map中比较小的坐标
      for(const [fruit,index] of map){
        if(index<minIndex){
          minIndex = index
        }
      }
      // 删除当前水果
      map.delete(tree[minIndex])
      // j往后移动
      j=minIndex+1
    }
    // 更新最大值
    max = Math.max(max,i-j+1)
  } 
  return max 
};