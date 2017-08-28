var katzDeliLine = [];

function takeANumber(array, name){
  var newArray = array;
  newArray.push(name);
  var place = newArray.indexOf(name);
  var spot = place+1;
  var message = `Welcome, ${name}. You are number ${spot} in line.`;
  return message;
}

function nowServing(array){
  var message = "There is nobody waiting to be served!";
  if(array.length === null){
    return message;
  }else{
    var person = array[0];
    var elseMessage = `Currently serving ${person}`;
    return elseMessage;
  }
}
takeANumber(katzDeliLine, "Ada"); // "Welcome, Ada. You are number 1 in line."
takeANumber(katzDeliLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
takeANumber(katzDeliLine, "Kent"); // "Welcome, Kent. You are number 3 in line."
nowServing(katzDeliLine);
