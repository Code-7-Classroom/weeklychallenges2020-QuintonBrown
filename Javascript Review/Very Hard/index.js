/* VERY HARD: You are given coins of different denominations and a total amount of money amount.
Write a function to compute the fewest number of coins that you need to make up that amount.
If that amount of money cannot be made up by any combination of the coins, return -1.
Hint: Sudo code this problem.
Focus on breaking the problem down into steps  Use functions, arrays and logical operators.
Do not have anyone give you the answer or solve this problem for you. 
Example 1:
Input: coins = [1, 2, 5], amount = 11
Output: 3 
Explanation: 11 = 5 + 5 + 1
Example 2:
Input: coins = [2], amount = 3
Output: -1

Note: You may assume that you have an infinite number of each kind of coin.
*/

// make a FUNCTION that will see if ANY COMBINATION of the INPUT coins make up = AMOUNT
// IF run code else return -1
// make parameters of array and total
// figure out whats the highest coin in array
// subtract highest coin from total
// check if highest coin is higher than remainder IF so subtract again ELSE find highest coin thats lower than remainder
// subtract coin from remainder
// check if coin is higher than remainder IF so subtract again ELSE find highest coin thats lower than remainder
// when total = 0 => # of coins (fewest)

// default = 0

// total / Math.max(array)
// remove element
// return remainder
// remainder/ Math.max(array)
// remove element
// if remainder = 0
// figure out how to add coins

// # of coins = round to lowest whole number
// total # coins + recursive function

function coinCombo(array, total) {
  var highestElement = Math.max(...array);
  var orderArray = array.sort();
  var coins = Math.floor(total / highestElement);
  var remainder = total % highestElement;
  orderArray.pop();
  if (remainder === 0) {
    return coins;
  } else {
    return coins + coinCombo(orderArray, remainder);
  }
}

console.log(coinCombo([1, 2, 5], 11));
console.log(coinCombo([2], 3));
// if total of array < total return total - array total
//check if [0] 

// total     11
// math max   5
// total / heighest element   11/5           2 coins
// return remainder 1
// drop element 1,2
// math max element 2
// if remainder < math max  dont do it ELSE divide   1/2  .5       X
// remainder / heighest element
