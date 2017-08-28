var katzDeliLine = [];

function takeANumber(array, name){
  var newArray = katzDeliLine;
  newArray.push(name);
  var place = newArray.indexOf(name);
  return place+1;
}
