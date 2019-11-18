const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  // Win var searches arr for any years with a 'W'
  let win  = arr.find(y => y.result === 'W')
  // If win is true (has a 'W'), return the year, else return undefined
  return !!win ? win.year : undefined
}