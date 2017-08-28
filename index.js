var katzDeliLine = [];

function takeANumber(array, name){
  var newArray = katzDeliLine;
  newArray.push(name);
  var place = newArray.indexOf(name);
  var spot = place+1;
  var message = `Welcome, ${name}. You are number ${spot} in line.`
  return place+1;
}

takeANumber(katzDeliLine, "Ada");
