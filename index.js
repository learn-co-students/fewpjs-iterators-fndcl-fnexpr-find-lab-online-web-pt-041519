import { finished } from "stream"
import { type } from "os";

const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(record)
{
  const result = record.find( ({ result }) => result === 'W' );
  if (typeof result === 'undefined')
  {
    return undefined
  } else {
  return result.year
  }
}
