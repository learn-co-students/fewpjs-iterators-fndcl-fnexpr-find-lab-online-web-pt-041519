const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  let object = array.find( o => o.result === "W")
  if(object){
    return object.year
  }else{
    return undefined
  }
}