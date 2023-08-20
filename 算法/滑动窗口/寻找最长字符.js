/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left=right=len=maxLen=0
    let arr=[]//记录当前滑动窗口包含的字符
    //当右指针指向字符串最右边时停止循环
    while(right<s.length){
        //如果窗口中的字符串包含了右指针指向的元素
        if(arr.includes(s[right])){
            // 当arr中包含右指针指向的字符，删除该元素
            while(arr.includes(s[right])){
                arr.shift()//删除
                len--//更新当前的长度
                left++//左指针右移动
            }
            //循环结束后，arr中不包含右指针指向的元素
            arr.push(s[right])
            len++
            right++
        }else{
            arr.push(s[right])
            len++
            //如果当前长度大于最大长度
            if(len>maxLen){
                maxLen=len
            }
            right++
        }
    }
    return maxLen
};