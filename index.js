const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(array){
    let record = array.find(record => record.result === "W")
      if (!record) {
        return
      } else {
        return record.year
      }

}
