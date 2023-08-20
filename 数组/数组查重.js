//语法
//  arr.sort()
//  arr.sort(compareFunction)
var arr=[11,2,4,4,3,3,12,5,3,1,100,11];
function res(arr){
    var tmp=[];
    //先进行第一轮排序,按字符顺序排列，排完之后的结果,就是1,100,11,11,12,2,3,3,3,4,4,5,
    //直接就是 arr[0]与arr[1]比较，依此类推，相等就是重复的.
    arr.sort().sort(function(a,b){
        //a等于b且输出数组中不存在a
        if(a===b && tmp.indexOf(a)===-1){
            tmp.push(a)//将a插入的数组中
        }
    })
    return tmp
    
}
var result=res(arr)
console.log(result)
