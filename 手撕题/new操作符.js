function myNew(){
    //1.创建一个新的对象
    let obj={}
    //获取构造函数
    let con=[].shift.call(arguments)
    //2.新对象的隐式原型__proto__链接到构造函数的显示原型prototype
    obj.__proto=con.prototype
    //3.构造函数内部的this绑定到这个新创建的对象 执行构造函数
    let result =con.apply(obj,arguments)
    //4.如果构造函数没有返回非空对象，则返回创建的新对象
    return result instanceof Object?result:obj
}

function _new(fn){
    //获取除fn以外的所有的arguments
    const args=Array.prototype.slice.call(arguments,1)
    //新建一个对象，用于函数转对象
    const newObj={}
    //原型链被赋值为原型对象
    newObj.__proto__=fn.prototype
    //this指向新对象
    fn.apply(newObj,args)
    //返回这个新对象
    return newObj
}



// test
function Car(name,price){
    this.name = name 
    this.price = price
}
Car.prototype.run = function() {
    console.log(this.price);
};
var test_create = myNew(Car, 'a', 100000);
console.log(test_create)
// compare
let obj = new Car( 'a', 100000)
console.log(obj)