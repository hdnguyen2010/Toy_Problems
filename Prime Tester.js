/*
Prime Tester
A prime number is an integer greater than 1 that has no divisors other than itself and 1. Write a function that accepts a number and returns true if it’s a prime number, false if it’s not. The grader is looking at the efficiency of your solution (number of operations) as well as correctness! 

Parameters:

n (required) - a number.

Examples
Input	Output
n:
2			true
n:
1			false
*/

function primeTester(n) {
  if (n < 2) { return false }
    if (n === 2) { return true }
    if (n % 2 === 0) { return false }
    if (n % 3 === 0) { return false }
    if (n % 5 === 0) { return false }
    if (n % 7 === 0) { return false }
    if (Math.sqrt(n) % 1 === 0) { return false }
    return true
}

console.log(primeTester(9))
