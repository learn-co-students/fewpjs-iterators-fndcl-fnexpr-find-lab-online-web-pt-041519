// const testVar = {}

// function testFunc() {
//   return "hi"
// }

function superbowlWin(record) {
  let win = record.find( function(o)  
    { return o.result === "W"}
  )
  
  if (win) {
    return win['year']
   } 
 }
