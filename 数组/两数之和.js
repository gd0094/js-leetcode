/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//暴力枚举
var twoSum1 = function(nums, target) {
    let result=[]
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                return [i,j]
            }
        }
    }
};
//哈希表
var twoSum2 = function(nums, target) {
    let map=new Map()
    for(let i=0;i<nums.length;i++){
        //如果哈希表中存在匹配的值
        if(map.has(target-nums[i])){
            let j=map.get(target-nums[i])
            return [nums[i],nums[j]]
        }
        map.set(nums[i],i)//将数组的值存入哈希表中
    }
};

var twoSum3 = function(nums, target) {
    let i=0,j=nums.length-1
    const res=[]
    while(i<j){
        let s=nums[i]+nums[j]
        if(s<target){
            i++
        }else if(s>target){
            j--
        }else{
            res.push(nums[i])
            res.push(nums[j])
            return res
        }
    }
};

let nums=[2,7,11,15],target=9
let arr=twoSum2(nums,target)
console.log(arr)