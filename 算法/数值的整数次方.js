/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(x=0) return 0
    let res=1
    if(n<0){
        x=1/x
        n=-n
    }
    while(n!=0){
        if(n&1==1){
            res*=x
        }
        x*=x
        n>>=1
    }
    return res
};