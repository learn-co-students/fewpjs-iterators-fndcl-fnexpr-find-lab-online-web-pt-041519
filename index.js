const testVar = {}

function testFunc() {
  return "hi"
}
const superbowlWin = (arr) => {
  let isWin = arr.find(year => year.result === "W")
  console.log(arr.year)
  return isWin ? isWin.year : undefined
}