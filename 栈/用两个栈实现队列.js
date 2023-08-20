let stack1=[];
let stack2=[];

//模拟入队
function push(node){
    stack1.push(node)
}

//模拟出队
function pop(){
    if(stack2.length===0){
        while(stack1.length){
            //将1栈的最后一个移动到2栈的尾部
            stack2.push(stack1.pop())
        }
    }
    //弹出队尾
    return stack2.pop()
}