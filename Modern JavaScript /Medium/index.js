/* 
MEDIUM: Write a function that takes in an array of numbers and outputs the average of all the numbers. 
Input: [1 , 4 , 7]  Output: 4
Input: [10, 5]  Output: 7.5
Input: [1.5, 3, 2.5, 1]  Output: 2
*/

//adds all elements 
// divide by 2
const numAverage = (array) => {
    const total = array.reduce((total, num) => total + num) //reduce, total is accumulated then added with the next element (for loop)
    return total / array.length
}
console.log(numAverage([1, 4, 7]))
console.log(numAverage([10, 5]))
console.log(numAverage([1.5, 3, 2.5, 1]))