//原理：验证当前类的原型prototype是否会出现在实例的原型proto上，只要在它的原型链上，则结果都为true
//obj是实例对象  className是构造函数
function myinstanceOf(obj,className){
    //let proto=obj.__proto__
    let proto=Object.getPrototypeOf(obj)
    let prototype=className.prototype
    while(true){
        if(proto==null) return false
        if(proto==prototype) return true
        //基于原型链继续获取原型对象上的__proto__
        proto=Object.getPrototypeOf(proto)
    }
}