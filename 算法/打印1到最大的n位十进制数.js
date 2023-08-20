/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
    let res=[]
    let max=Math.pow(10,n)-1
    for(let i=1;i<=max;i++){
        res.push(i)
    }
    return res
};

var printNumbers = function(n) {
    let len=Math.pow(10,n)-1
    return Array.from({length: len}, (item, index) => index+1);
};