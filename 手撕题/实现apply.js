Function.prototype.myApply=function(context){
   // 如果没有参数，指向window
    // 将context转化为对象类型（防止传入的是非对象类型）
    context = (context !== null && context !== undefined) ? Object(context) : window
    let fn=Symbol(context)
    context[fn]=this//给contxt添加一个方法 指向this
    //处理参数，取出第一个参数this,其他传入fn函数
    let arg=[...arguments].slice(1)
    constext[fn](arg)//执行fn,参数是数组
    delete context[fn]//删除方法
}
