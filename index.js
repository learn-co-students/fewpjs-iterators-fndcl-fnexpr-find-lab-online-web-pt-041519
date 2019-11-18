const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(record){
  let w = record.find(win => {return win.result === 'W'});
  if (w){
    return w.year;
  } else {
    return undefined;
  };
};
