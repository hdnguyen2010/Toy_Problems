/*
Words within Words
Given an array of unique words, find the word that contains the greatest number of other words. A word must be at least two letters long. For an added challenge, try for O(n).

Examples
Input											Output
wordList:
[ "gray", "grays", "ray", "rays", "strays" ]	"grays"
*/

function nestedWordCount(wordList) {
  var longest = [null, 0];
  for (var i = 0; i < wordList.length; i++) {
  	console.log(wordList[i])
  	var counter = 0;
  	for (var j = 0; j < wordList.length; j++) {
  		if (wordList[i].includes(wordList[j])) {
  			counter++;
  		}
  	}
  	console.log(counter, longest[1])
  	if (counter > longest[1]) {
  		longest[0] = wordList[i];
  		longest[1] = counter;
  	}
  }
  return longest[0];
}

console.log(nestedWordCount([ "gray", "grays", "ray", "rays", "strays" ])) //=> "grays"
