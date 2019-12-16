const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(records) {

  const found = records.find(r => r.result === "W");
  return (found ? found.year : undefined);
  
}