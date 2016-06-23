/*
Longest Palindrome
Implement a function that finds the longest palindrome in a given string. For example, in the string “My dad is a racecar athlete”, the longest palindrome is “a racecar a”. Count whitespaces as valid characters. Other palindromes in the above string include “dad”, “ete”, “ dad “ (including whitespace on each side of dad).

Examples
Input														Output
string:
"aibohphobia"										"aibohphobia"
string:
"My dad is a racecar athlete"		"a racecar a"
*/

function isPalindrome(string) {
 var revStr = string.split('').reverse().join('');
 return revStr === string;
}

function longestPalindrome(string) {
	var maxLength = 0, maxPalindrome = '';
	for(var i = 0; i < string.length; i++) {
		var subString = string.substr(i, string.length);
		for(var j = subString.length; j >= 0; j--) {
			var subSubString = subString.substr(0, j);
			if(subSubString.length <= 1) continue;
			if(isPalindrome(subSubString)) {
				if(subSubString.length > maxLength) {
					maxLength = subSubString.length;
					maxPalindrome = subSubString;
				}
			}
		}
	}
	return maxPalindrome;
}

console.log(longestPalindrome("My dad is a racecar athlete"))
