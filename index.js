var katzDeliLine = [];
var newDeli = ["Steven", "Blake", "Avi"];

function takeANumber(array, name){
  var newArray = array;
  newArray.push(name);
  var place = newArray.indexOf(name);
  var spot = place+1;
  var message = `Welcome, ${name}. You are number ${spot} in line.`;
  return message;
}

function nowServing(array){
  var newArray = array
  var person = newArray[0];
  var message;
  if(array.length === null){
      return "There is nobody waiting to be served!";
  }else{

    // var message = `Currently serving ${person}`;
    // var elseMessage = `Currently serving ${person}`;
      return `Currently serving ${person}.`;
      newArray.pop();

  }

}
takeANumber(katzDeliLine, "Ada"); // "Welcome, Ada. You are number 1 in line."
takeANumber(katzDeliLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
takeANumber(katzDeliLine, "Kent"); // "Welcome, Kent. You are number 3 in line."
nowServing(newDeli);
