/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

Examples
Input				Output
array:
[ 2, 1, 3, 7 ]		42
array:
[ 0, 2, 3 ]			0
*/

// var array = [ 4, -7, -1, -3, -7 ]
var array = [-31,41,34,-37,-17,29]

function largestProductOfThree (array) {
	array.sort(function(a, b) {
		return a - b;
	});
	var product1 = array[0] * array[1] * array[array.length-1];
	var product2 = array[array.length-1]*array[array.length-2]*array[array.length-3];
	console.log(product1,product2,array)
	return Math.max(product1,product2)
}


console.log(largestProductOfThree(array))