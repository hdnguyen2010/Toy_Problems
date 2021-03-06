/*
Telephone Words
Each number key on a standard phone keypad has a set of Latin letters written on it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg

Businesses often try to come up with clever ways to spell out their phone number in advertisements to make it more memorable. But there are a lot of combinations!

Write a function that takes up to four digits of a phone number, and returns a list of all of the words (in alphabetical order) that can be written on the phone with that number. (You should return all permutations, not only English words.)

Examples
Input				Output
digitString:
"0002"				[ "000A", "000B", "000C" ]
digitString:
"1123"				[ "11AD", "11AE", "11AF", "11BD", "11BE", "11BF", "11CD", "11CE", "11CF" ]
*/

function telephoneWords(digitString) {
    var helper = {
        2: ['A', 'B', 'C'],
        3: ['D', 'E', 'F'],
        4: ['G', 'H', 'I'],
        5: ['J', 'K', 'L'],
        6: ['M', 'N', 'O'],
        7: ['P', 'Q', 'R', 'S'],
        8: ['T', 'U', 'V'],
        9: ['W', 'X', 'Y', 'Z']
    };
    var result = [];
    function checker(digits, combos) {
    	var helperDigits = digits.charAt(0);
    	if(digits.length === 0) {
    		result.push(combos);
    		return;
    	}
    	if(!helper[helperDigits]){
    		combos += helperDigits;
    		checker(digits.slice(1), combos);
    	}
    	else {
    		for (var i = 0; i < helper[helperDigits].length; i++) {
    			var temp = combos;
    			combos += helper[helperDigits][i];
    			checker(digits.slice(1), combos);
    			combos = temp;
    		}
    	}
    }
    checker(digitString, '');
    return result
}

console.log(telephoneWords("1123"))
