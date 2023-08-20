/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  // 当前累加的数组
  const memo= []
  memo[0] = nums[0]
  let max = nums[0]

  for(let i=1;i<nums.length;i++){
    memo[i] = Math.max(nums[i]+memo[i-1],nums[i])
    // console.log('i',i)
    // console.log('nums[i]+memo[i-1]------nums[i]',nums[i]+memo[i-1],nums[i]);
    // console.log('memo',memo);
    max= Math.max(max,memo[i])
    // console.log('max',max)
  }
  
  return max
};
const nums = [-2,1,-3,4,-1,2,1,-5,4]
maxSubArray(nums)
/* 
i 1
nums[i]+memo[i-1]------nums[i] -1 1
memo [ -2, 1 ]
max 1

i 2
nums[i]+memo[i-1]------nums[i] -2 -3
memo [ -2, 1, -2 ]
max 1

i 3
nums[i]+memo[i-1]------nums[i] 2 4
memo [ -2, 1, -2, 4 ]
max 4

i 4
nums[i]+memo[i-1]------nums[i] 3 -1
memo [ -2, 1, -2, 4, 3 ]
max 4

i 5
nums[i]+memo[i-1]------nums[i] 5 2
memo [ -2, 1, -2, 4, 3, 5 ]
max 5

i 6
nums[i]+memo[i-1]------nums[i] 6 1
memo [
  -2, 1, -2, 4,
   3, 5,  6
]
max 6

i 7
nums[i]+memo[i-1]------nums[i] 1 -5
memo [
  -2, 1, -2, 4,
   3, 5,  6, 1
]
max 6

i 8
nums[i]+memo[i-1]------nums[i] 5 4
memo [
  -2, 1, -2, 4, 3,
   5, 6,  1, 5
]
max 6 
*/