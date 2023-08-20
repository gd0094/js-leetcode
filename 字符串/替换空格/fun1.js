/* 
    思路：让字符串每个字母遍历，遇到字母就不做处理，遇到空格就把它变成%20
*/
var replaceSpace=function(s){
    let re=''//目标字符串
    for(let i=0;i<s.length;i++){
        //如果是空格
       if(s[i]===' '){
            re=re+"%20"//替换空格
            continue//跳出循环
       } 
       re=re+s[i]//把字母写入result中
    }
    return re;
}
s="We are happy"
var result=replaceSpace(s)
console.log(result)