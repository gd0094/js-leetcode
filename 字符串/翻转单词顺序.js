/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  s=s.trim()//去除前后空格
  let j=s.length-1,i=j//双指针
  let res=[]
  while(i>=0){
    // 找到第一个空格
    while(i>=0 && s.charAt(i)!==' ') i--
    // 截取单词添加到res中
    res.push(s.substring(i+1,j+1))
    // 找到下一个字母结尾（处理多空格的情况）
    while(i>=0 && s.charAt(i)==' ') i--
    j=i //将j定位到下一个单词结尾
  }
  return res.join(' ').trim()
};

let s="the sky is blue"
reverseWords(s)