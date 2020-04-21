/* 
VERY EASY: What is the difference between the following JavaScript keywords: var, let and const.  
Please provide a written explanation. You are able to include a code reference along with your written explanation for each keyword.
*/

// All are used to declare a variable

// VAR (es5)- CAN be reassigned  
// var num1 = 4
// console.log(num1) //4
// num1 = 5
// console.log(num1) //5

// LET (es6)-block level meaning it can only be accessed within the local scope, CAN be reassigned
// let num1 = 4 
// console.log(num1) //4
// num1 = 5
// console.log(num1) //5

// CONST (es6)-CANNOT be reassigned
// const num1 = 4
// console.log(num1) //4
// num1 = 5
// console.log(num1) //Uncaught TypeError: Assignment to constant variable.
