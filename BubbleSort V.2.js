/*
BubbleSort V.2
Bubble sort is considered the most basic sorting algorithm in Computer Science. It works by starting at the first element of an array and comparing it to the second element:

If the first element is greater than the second element, it swaps the two.
It then compares the second to the third, and the third to the fourth, and so on.
In this way, the largest values ‘bubble’ to the end of the array.
Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
Implement a function that takes an array and sorts it using this technique.

NOTE: DO NOT use JavaScript’s built-in sorting function (Array.prototype.sort).

Examples
Input							Output
input:
[ 20, -10, -10, 2, 4, 299 ]		[ -10, -10, 2, 4, 20, 299 ]
*/

function bubbleSort (input) {
  var result = [], 
  counter = input.length, 
  last = 0, 
  secondCounter = 0,
  reverseCount = 0,
  secondReverseCount = input.length - 1;
  while(secondCounter < input.length) {
  	for(var i = 1; i < input.length; i++) {
  		if(input[i-1] > input[i]) {
  			var temp = input[i-1];
  			input[i-1] = input[i];
  			input[i] = temp;
  		}
  	}
  	last = input[counter - 1];
  	result[secondCounter++] = last;
  	counter--;
  }
  while(reverseCount < secondReverseCount) {
  	var temp2 = result[reverseCount];
  	result[reverseCount] = result[secondReverseCount];
  	result[secondReverseCount] = temp2;
  	reverseCount++;
  	secondReverseCount--;
  }
  return result
}

console.log(bubbleSort([ 20, -10, -10, 2, 4, 299 ])) //=> [ -10, -10, 2, 4, 20, 299 ]
