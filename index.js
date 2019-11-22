const testVar = {}

function testFunc() {
}
function superbowlWin(record) {
  let win = record.find(({ result }) => result === "W")
  return (!!win ? win.year : testFunc())
}