const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arrayOfObjects){
  let win = arrayOfObjects.find(obj => obj.result === "W")
  return !!win ? win.year : undefined
}
