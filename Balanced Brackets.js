/*
Balanced Brackets
Given a string, return true if it contains all balanced parenthesis (), curly-brackets {}, and square-brackets [].

Examples
Input					Output
str:
"(x + y) - (4)"			= true
str:
"(x + y) - (4)"			= true
str:
"(((10 ) ()) ((?)(:)))"	= true
str:
"[{()}]"				= true
str:
"(50)("					= false
*/

function isBalanced (str) {
  var brackets = {
    ')':'(',
    ']':'[',
    '}':'{'
  };
  var string = '';

  for (var i = 0; i < str.length; i++) {
    if (['(','[','{'].indexOf(str[i]) > -1) {
      string += str[i];
    } else if (brackets[str[i]]) {
      if (string[string.length-1] === brackets[str[i]]) {
        string = string.slice(0,string.length-1);
      } else {
        return false;
      }
    }
  }
  return string === '';
}
