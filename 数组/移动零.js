/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let j = 0;
  for(let i=0;i<nums.length;i++){
    // 遇到非0的数就把它往前挪
    if(nums[i] !== 0){
      nums[j] = nums[i]
      j++
    }
  }
  // 从j位置之后的数都变为0
  for(i=j;i<nums.length;i++){
    nums[i] = 0
  }
  return nums
};