const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {  
  let answer = record.find(w => w.result === "W")

  if (answer) {
    return answer.year
  }
}

