
function superbowlWin(array) {
  let x = array.find( line => {
    if(line.result === "W") {
      return line
    }
  })
  if(x) {return x.year}
}