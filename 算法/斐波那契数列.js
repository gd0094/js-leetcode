function fibonacci(n){
    var result=[0,1]
    if(n<0) throw new Error('输入的数字不能小于0')
    for(var i=2;i<=n;i++){
        result[i]=(result[i-1]+result[i-2])%(Math.pow(10,9)+7)//如果传入n=4,先算a[3],再算a[4]
      }
    return result[n]
  }

  /**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
	if(n<0) throw new Error('输入的数字不能小于0')
    let arr=[0,1];//在外部函数中定义数组，内部函数给数组添加值
	function cacl(n){
    if(n<2){
      return arr[n];
    }
    //如果该数字已经计算过，自己返回对应的值
    if(arr[n]!=undefined){
      return arr[n];
    }
    let data=cacl(n-1)+cacl(n-2);//使用data将每次递归得到的值保存起来
    arr[n]=data;//将每次递归得到的值放到数组中保存
    return data%(1e9+7);
  }
  return cacl(n);//调用内部方法
};
for(var i=3;i<=45;i++){
    console.log(fib(i))
  }