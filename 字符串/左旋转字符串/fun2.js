/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    let s1=s.substring(n)
    let s2=s.substring(0,n)
    return s1+s2
}