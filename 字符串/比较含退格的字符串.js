/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  let backspaceS=0,backspaceT=0
  let i=s.length-1,j=t.length-1
  while(i>=0 || j>=0){
    while(i>=0){
      if(s[i] === '#'){
        backspaceS++
        i--
      }else if(backspaceS>0){
        backspaceS--
        i--
      }else{
        break
      }
    }
    while(j>=0){
      if(t[j] === '#'){
        backspaceT++
        j--
      }else if(backspaceT>0){
        backspaceT--
        j--
      }else{
        break
      }
    }
    if(s[i]!==t[j]){
      return false
    }
    if((i<0 && j>=0) || (i>=0 && j<0)){
      return false
    }
    i--
    j--
  }
  return true
};