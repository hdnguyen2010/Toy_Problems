/*
Power Set
Return an array that contains the power set of a given string. The power set is a set of all the possible subsets, including the empty set.

Make sure your code does the following:

All characters in a subset should be sorted alphabetically, and the array of subsets should be sorted alphabetically.
Sets of the same characters are considered duplicates regardless of order and count only once, e.g. ‘ab’ and ‘ba’ are the same.
Duplicate characters in strings should be ignored; for example, ‘obama’ should be evaluated as if it only contained one ‘a’. See the result below.
Examples
Input													Output
string:
"a"														= [ "", "a" ]
string:
"ab"													= [ "", "a", "ab", "b" ]
string:
"horse"												= [ "", "e", "eh", "eho", "ehor", "ehors",
														  	"ehos", "ehr", "ehrs", "ehs", "eo", "eor",
														  	"eors", "eos", "er", "ers", "es", "h", "ho",
														  	"hor", "hors", "hos", "hr", "hrs", "hs", "o",
														  	"or", "ors", "os", "r", "rs", "s" ]
*/

function powerSet(string) {
  string = alphabetize(string);
  string = uniq(string);
  var result = [];
  var recursion = function(str) {
    if(str === "") {
        result.push("");
    }
    else {
        recursion(str.slice(1));
        var currentLength = result.length;
        for(var i=0; i<currentLength; i++) {
            result.push(str[0]+result[i]);
        }
    }
  }
  recursion(string);
  return result.sort();
}
//sort alphabetically
var alphabetize = function(string) {
    var arr = string.split("");
    arr.sort();
    return arr.join("");
}
//remove duplicates
var uniq = function(string) {
    var result = "";
    for(var i=0; i<string.length; i++) {
        if(!result.includes(string[i])) {
            result+=string[i];
        }
    }
    return result;
}

console.log(powerSet("horse"));