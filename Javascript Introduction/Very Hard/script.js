var calculator1 = prompt('Enter a number');
var calculator2 = prompt('Enter an operator either +, -, * or /');
var calculator3 = prompt('Enter another number');




function add (num1, num2) {
    var total = num1 + num2 
    console.log(total)
}


function subtract (num1, num2) {
    var total = num1 - num2 
    console.log(total)
}


function multiply (num1, num2) {
    var total = num1 * num2 
    console.log(total)
}


function divide (num1, num2) {
    var total = num1 / num2 
    console.log(total)
}

if(calculator2 == '+') {
    add(parseInt(calculator1), parseInt(calculator3));
} else if(calculator2 == '-') {
    subtract(calculator1, calculator3)
} else if(calculator2 == '*') {
    multiply(calculator1, calculator3)
} else if(calculator2 == '/') {
    divide(calculator1, calculator3)
}