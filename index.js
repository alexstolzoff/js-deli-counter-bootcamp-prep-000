var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var spot = katzDeliLine.indexOf("name") +1;
  var t = spot+1;
  var message = `Welcome, ${name}. You are number ${t} in line.`
  // return spot;
  // return katzDeliLine;
  return message;
}

function nowServing(katzDeliLine){
  var message = `Currently serving ${katzDeliLine[0]}.`
  if(message == "Currently serving undefined"){
    return "There is nobody waiting to be served!"

  }else{
    return message;
    katzDeliLine.shift();
  }
}

takeANumber(katzDeliLine, "Ada"); // "Welcome, Ada. You are number 1 in line."
takeANumber(katzDeliLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
takeANumber(katzDeliLine, "Kent");
 nowServing(katzDeliLine);
