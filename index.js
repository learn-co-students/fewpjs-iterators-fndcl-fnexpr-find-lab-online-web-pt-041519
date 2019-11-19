const testVar = {}

function testFunc() {
  return "hi"
}



superbowlWin = (record) => {
    let outcome = record.find(record => record.result === "W");
 if (outcome){
     return outcome.year;
 }
 else {
     return undefined;
 }
}
 
 
//     if (outcome){
//    return record.year
//  }
//  else (outcome === false){
//     return undefined
// }
// }

