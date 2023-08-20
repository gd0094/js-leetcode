/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(strs.length === 0){
      return []
    }
    const map=new Map()
    for(const str of strs){
      // 创建一个长度为26的数组，起始值为0
      const characters= Array(26).fill(0)
      // 遍历所有字符串，将字母的出现频率放到数组的对应位置里
      for(let i=0;i<str.length;i++){
        // 利用ascil码判断是哪个字母
        const ascli=str.charCodeAt(i)-97
        characters[ascli]++
      }
      // console.log('characters',characters)
      const key=characters.join()//转为字符串
      // console.log('key',key)
      // 如果存在相同字母
      if(map.has(key)){
        // 分组拼接数组
        // map.set(key,map.get(key).push(str))
        map.set(key,[...map.get(key),str])
      }else{
        // 不存在相同字母则新建一个
        map.set(key,[str])
      }
    }

    const result = []
    // 遍历map
    for(const arr of map){
      // console.log('arr',arr)
      // [ '1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0', [ 'bat' ] ]
      // console.log('arr[1]',arr[1])
      // [ 'bat' ]
      // arr[1]是value值
      result.push(arr[1])
    }
    console.log('result',result)
    return result
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
groupAnagrams(strs)