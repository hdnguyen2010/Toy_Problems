/*
Non-repeated Character
Given an arbitrary input string, return the first non-repeating character. For strings with all repeats, return 'sorry'.

Examples
Input			Output
string:
"ABCDBIRDUP"	"A"
string:
"XXXXXXX"		"sorry"
string:
"ALAMABA"		"L"
string:
"BABA"			"sorry"
*/

function firstNonRepeatedCharacter (string) {
	for(var i = 0; i < string.length; i++) {
		var char = string.charAt(i);
		if(string.indexOf(char) === i && string.indexOf(char, i + 1) === -1){
			return char;
		}
	}
	return "sorry"
}

console.log(firstNonRepeatedCharacter("ABCDBIRDUP")) 	//=> "A"
console.log(firstNonRepeatedCharacter("BABA"))			//=> "sorry"
console.log(firstNonRepeatedCharacter("ALAMABA")) 		//=> "L"
