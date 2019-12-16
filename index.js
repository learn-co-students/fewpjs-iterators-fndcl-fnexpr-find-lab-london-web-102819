const testVar = {}

function superbowlWin(array) {
  let victory = array.find( function(e) { return e.result === "W" });
  if (victory) {
    return victory.year
  }
}

function testFunc() {
  return "hi"
}
