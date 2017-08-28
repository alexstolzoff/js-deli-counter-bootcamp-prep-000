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

  var person = array[0];
  array.shift();
  var servingMessage;
  var dismissalMessage;
  if(array.length === null){
      dismissalMessage = "There is nobody waiting to be served!";
      return dismissalMessage;
  }else{

    // var message = `Currently serving ${person}`;
    // var elseMessage = `Currently serving ${person}`;
    message = `Currently serving ${person}.`
      return message;


  }
  return array;

}
takeANumber(katzDeliLine, "Ada"); // "Welcome, Ada. You are number 1 in line."
takeANumber(katzDeliLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
takeANumber(katzDeliLine, "Kent"); // "Welcome, Kent. You are number 3 in line."
nowServing(newDeli);
