/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  const set = new Set()
  const result = new Set()
  for(let i=0;i+10<=s.length;i++){
    const dna = s.substring(i,i+10)
    if(set.has(dna)){
      result.add(dna)
    }else{
      set.add(dna)
    }
      
  }
  return Array.from(result)
};