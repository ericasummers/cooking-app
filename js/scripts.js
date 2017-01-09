var OuncetoLiter = function (ounce){
  return ounce / 33.814
};

var LitertoOunce = function (liter){
  return liter * 33.814
}


var ounce = parseFloat(prompt("What does it weigh in ounces?"));
var liter = parseFloat(prompt("What does it weigh in liters?"));
var result = OuncetoLiter(ounce);

alert (result);
