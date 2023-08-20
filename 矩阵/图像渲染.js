/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
  if(image[sr][sc]===color){
    return image
  }
  const oldColor=image[sr][sc]
  function dfs(sr,sc){
    if(sr<0||sr>=image.length||sc<0||sc>=image[0].length||image[sr][sc]!==oldColor){
      return
    }
    image[sr][sc]=color
    dfs(sr-1,sc)
    dfs(sr+1,sc)
    dfs(sr,sc+1)
    dfs(sr,sc-1)
  }
  dfs(sr,sc)
  return image
};