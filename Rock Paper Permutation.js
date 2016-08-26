/*
Rock Paper Permutation
Given a number of rounds n, return all the possible rock-paper-scissors play possibilities for that number of rounds.

Examples
Input		Output
roundCount:
1			[ "r", "p", "s" ]
roundCount:
2			[ "rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss" ]
roundCount:
0			[ ]
*/

function rockPaperPermutation (roundCount) {
  //store results
  var results = [];
  //available choices per round
  var choices = ['r', 'p', 's'];
  if(roundCount) {
  	var recurse = function(combo) {
  		if(combo.length === roundCount) {
  			results.push(combo);
  			return
  		}
  		for(var i = 0; i < choices.length; i++) {
  			recurse(combo +choices[i]);
  		}
  	}
  	recurse('');
  }
  return results;
}

console.log(rockPaperPermutation(1)) //=> [ "r", "p", "s" ]

console.log(rockPaperPermutation(2)) //=> [ "rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss" ]