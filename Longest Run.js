/*
Longest Run
Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.

Examples
Input					Output
string:
"abbbcc"			= [ 1, 3 ]
string:
"aabbc"				= [ 0, 1 ]
string:
""						= [ 0, 0 ]
string:
"mississippi"	= [ 2, 3 ]
string:
"abcdefgh"		= [ 0, 0 ]
string:
"abccccccc"		= [ 2, 8 ]
*/

function longestRun(string) {
  var result = [0,0],
  current = [0,0];
  for(var i = 1; i < string.length; i++) {
  	if(string[i-1] === string[i]) {
	  	current[1] = i;
	  	if(current[1] - current[0] > result[1] - result[0]) {
	  		 result = current;
	  	}
  	}else {
  		current = [i, i]
  	}
  }
  return result;
};

console.log(longestRun("abccccccc"))