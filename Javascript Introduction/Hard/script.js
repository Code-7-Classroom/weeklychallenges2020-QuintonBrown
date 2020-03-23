/* HARD: Create 4 math functions, 
one called add() that adds 2 numbers, 
one called subtract() that subtracts 2 numbers, 
one called multiply() to multiply 2 numbers, 
and one called divide() to divide two numbers.
*/

var num1 = 100;
var num2 = 200;
var num3 = 300;
var num4 = 400;
var num5 = 500;

function add (num1, num2) {
    var total = num1 + num2; 
    console.log(total);
}
add (num1, num2);

function subtract (num1, num2) {
    var total = num1 - num2; 
    console.log(total);
}
subtract (num5, num4);

function multiply (num1, num2) {
    var total = num1 * num2; 
    console.log(total);
}
multiply (num3, num4);

function divide (num1, num2) {
    var total = num1 / num2; 
    console.log(total);
}
divide (num1, num5);