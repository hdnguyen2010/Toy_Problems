/*
Sum Array
Given an array of numbers, calculate the greatest contiguous sum of numbers in it. A single array item will count as a contiguous sum.

Examples
Input						Output
array:
[ 1, 2, 3 ]					6
array:
[ 4, -1, 5 ]				8
array:
[ 10, -11, 11 ]				11
array:
[ 1, 2, 3, -6, 4, 5, 6 ]	15
*/

function sumArray (array) {
	var i, best = array[0], prev = 0;
	console.log("best:",best,"prev:", prev)
	for(i = 0; i < array.length; i++) {
		prev = Math.max(array[i], prev += array[i]);
		best = Math.max(prev, best);
		console.log("best:", best, "prev:", prev,"array[i]:",array[i])
		}
	console.log("2best:",best,"2prev:", prev)
	return best;
}
