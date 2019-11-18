// const testVar = {}

// function testFunc() {
//   return "hi"
// }

function superbowlWin(array) {
  let yearWon = array.find(function(object) {
    return object.result === 'W'
  })

  return !!yearWon ? yearWon.year : undefined
}
