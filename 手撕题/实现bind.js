Function.prototype.myBind=function(context){
    //返回一个绑定this的函数,我们需要在此保存this
    let self=this
    //可以支持柯里化形式传参 fn(1)(2),保存参数
    let arg=[...arguments].slice(1)
    //返回一个函数
    return function(){
        //因为支持柯里化传参我们需要再次获取存储参数
        let newArg=[...arguments]
        console.log(newArg)
        //返回函数绑定this,传入两次保存的参数
        //考虑返回函数有返回值做了return
        return self.apply(context,arg.concat(newArg))
    }
}
let Tom={
    name:'Tom',
    say(age){
        //console.log(this)
        console.log(`我就叫${this.name},今年${age}岁`)
    }
}
Jay={
    name:'Jay',
}
let fn=Tom.say.myBind(Jay)
fn()//我就叫Jay,今年undefined岁
fn(18)//我就叫Jay,今年18岁