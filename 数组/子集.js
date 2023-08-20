/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const result = []
  function backtrack(start,curr){
    result.push([...curr])//创建一个新数组，保证是值传递
    for(let i=start;i<nums.length;i++){
      curr.push(nums[i])
      backtrack(i+1,curr)
      curr.pop()
    }
  }
  backtrack(0,[])
  return result
};

let nums = [1,2,3]
subsets(nums)
// 递归从下往上运行
// 递归后还未pop
// i=1 curr=[1]
/* 
  curr.pop => curr=[]
  i=1 循环继续
  i=2 curr=[2] 继续递归后面的情况 [2,3] [3]
*/
// i=2 curr=[1,2]
/* 
  curr.pop => curr=[1]
  i=2 循环继续
  i=3 curr=[1,3]
  curr.pop => curr=[1] 
  i=3 循环结束

*/
// i=3 curr=[1,2,3]
/* curr.pop => curr=[1,2] i=3 循环结束 */
