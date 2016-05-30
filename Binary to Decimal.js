/*
Binary to Decimal.js
Given a number n (represented as a binary number string), convert n to base 10. Do NOT use parseInt(n, 2). You may use the parseInt function that takes in just one argument.

Examples
Input	Output
n:
"0"		= 0
n:
"1"		= 1
n:
"10"	= 2
n:
"11"	= 3
n:
"100"	= 4
*/

function binaryToDecimal (n) {
  return n.split('').reduce(function(sum, digit, idx){
    return sum += digit === '1' ? Math.pow(2, (n.length-1) - idx) : 0
  }, 0)
  
  // ES6 binary literal conversion
  // return Number("0b" + n)
}