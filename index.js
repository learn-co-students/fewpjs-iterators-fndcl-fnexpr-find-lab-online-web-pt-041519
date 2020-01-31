
function superbowlWin(array) {
  let x = array.find( line => {
    if(line.result === "W") {
      return line.year
    }
    else {
      return undefined
    }
  })
 return x 
}