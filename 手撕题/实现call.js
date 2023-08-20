/*************  原生 *************/
let Tom={
    name:'Tom',
    say(age){
        console.log(this)
        console.log(`我就叫${this.name},今年${age}岁`)
    }
}

//Tom.say()
//{ name: 'Tom', say: [Function: say] },我就叫Tom
Jay={
    name:'Jay',
}
//this指向变为Jay
//Tom.say.call(Jay)//{ name: 'Jay' },我就叫Jay
//Tom.say.call()//window

/*************  手写 *************/

Function.prototype.MyCall=function(context){
    // 如果没有参数，指向window
    // 将context转化为对象类型（防止传入的是非对象类型）
    context = (context !== null && context !== undefined) ? Object(context) : window
    //say需要是一个唯一值，使用es6的新类型symbol
    let fn=Symbol(context)
    //此时调用MyCall的函数是say方法，所以this指向[Function: say]
    context[fn]=this//给context添加一个方法，指向this
    //处理参数,取出第一个参数this，其他传入fn函数
    let arg=[...arguments].slice(1)//把[...xxx]把伪数组转化为数组，slice返回一个新数组
    context[fn](...arg)//执行fn,参数是多个变量需要展开数组
    delete context[fn]//删除方法
}
Tom.say.MyCall(Jay,18)
//{ name: 'Jay', age: 44, [Symbol([object Object])]: [Function: say] }
// 我就叫Jay,今年18岁