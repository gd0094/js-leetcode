function find(target,array){
    let newArray =[].concat(...array)
    //let newArray = array.flat()
    let flag =newArray.includes(target)
    if(flag) return true
    return false
}