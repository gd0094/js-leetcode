function unique(arr){
    var res = arr.filter(function(item,index,array){
        return array.indexOf(item) === index
    })
    return res
}

function unique1(arr){
    let res = arr.filter((item,index,array)=>{
        console.log(array.indexOf(item),index)
        // array.indexOf(1)只会返回第一个数的下标-0
        // 0 0 
        // 0 1
        // 0 2 
        // 0 3
        // 4 4
        return array.indexOf(item) === index//只返回第一个数
    })
    return res
}

var uniqueSet = arr=>[...new Set(arr)]

const arr=[1,1,1,1,2,3,4,5]
const newArr=uniqueSet(arr)
console.log(newArr)