const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) { 
  let teamData = array.find(data => data.result === "W")

  if(teamData) {
    return teamData.year
  }
  else {
    return undefined
  }
}
