/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const result = new Set()
  const set = new Set(nums2)//数组转set

  for(num of nums1){
    // 数组搜索值，复杂度O(n)
    // Set Map -.has 复杂度O(1)
    if(set.has(num)){
      result.add(num)
    }
  }
  return  Array.from(result)
};