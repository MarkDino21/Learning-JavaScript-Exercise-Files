
// test1: simply calculator
var output = document.getElementById('output');
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');

function test1Calc(num1, num2, op, total) {
  output.innerHTML= "<p>"+num1 + " " + op + " " + num2 + " = " + total + "</p>" + output.innerHTML;
  output.childNodes[1].style.color= "black";
}

function myAdd() {
  var a = Number(num1.value);
  var b = Number(num2.value);
  var op = '+'
  var total = a + b;
  test1Calc(a, b, op, total);
}

function mySub() {
  var a = Number(num1.value);
  var b = Number(num2.value);
  var op = '-'
  var total = a - b;
  test1Calc(a, b, op, total);
}

function myMul() {
  var a = Number(num1.value);
  var b = Number(num2.value);
  var op = 'x'
  var total = a * b;
  test1Calc(a, b, op, total);
}
function myDiv() {
  var a = Number(num1.value);
  var b = Number(num2.value);
  var op = '/'
  var total = a / b;
  test1Calc(a, b, op, total);
}
