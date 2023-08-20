/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    let i=0
    let j=nums.length-1
    let tmp
    while(i<j){
        while(i<j&&(nums[i]&1)==1){
            i++
        }
        while(i<j&&(nums[j]&1)==0){
            j--
        }
        tmp=nums[i]
        nums[i]=nums[j]
        nums[j]=tmp
    }
    return nums
};