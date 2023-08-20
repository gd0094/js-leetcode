/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(let i=digits.length-1;i>=0;i--){
      if(digits[i]!==9){
        digits[i]++
        return digits
      }else{
        // 如果那一位是9，则变为0，进入下一位循环
        digits[i]=0
      }
    }

    const result=[1,...digits]
    //const result=[1].concat(digits)
    return result
};