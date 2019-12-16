const testVar = {}


function superbowlWin(objects) {
  let result = objects.find(object => object.result === "W");
  if (result) {
    return result.year;
  } else {
    return result; 
  }
}
