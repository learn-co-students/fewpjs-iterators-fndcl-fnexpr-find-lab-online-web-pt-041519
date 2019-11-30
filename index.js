// const testVar = {}

// function testFunc() {
//   return "hi"
// }


const superbowlWin = (arr) => {
  const res = arr.find(obj => obj.result === "W" )
  if(res){ return res.year }
}