//直接使用js中的replaceAll语法进行替换
var replaceSpace=function(s){
    return s.replaceAll(" ","%20")
}
s="We are happy"
var result=replaceSpace(s)
console.log(result)