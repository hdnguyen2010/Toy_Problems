/*
In an array of every possible anagram of a given string, what index would the original string occupy?

Consider an anagram as any sequence of letters. For any word with at least two different letters, there are other words composed of the same letters but in a different order (for instance, RESISTANCE/ANCESTRIES, which happen to both be dictionary words; for our purposes “SISTANERCE” is also a “word” composed of the same letters as these two).

Given a word, return its index number, starting at 1 (not 0), for some reason.

Here is the catch: Your function should be able to accept any word 20 letters or less in length (possibly with some letters repeated), and take no more than 5000 milliseconds to run.

Examples
Input		Output
string:
"BAEBEE"	= 12
string:
"ABBS"		= 1
string:
"BABS"		= 4
string:
"ARCTIC"	= 42
string:
"STARK"		= 92
*/

function anagramPosition(string) {
    var length = string.length;
    var letters = string.split('');
    letters.sort();
    letters = letters.join('');

    function factorial(n) {
        if (n === 1) {
            return n
        } else {
            return n * factorial(n - 1);
        }
    }
    var counter = 0;

    function permute(p1, p2, p3) {
        if (p1.length === string.length) {
            return;
        }
        var letterCount = {};
        for (var i = 0; i < p2.length; i++) {
            var char = p2.charAt(i);
            if (letterCount[char]) {
                letterCount[char]++;
            } else {
                letterCount[char] = 1;
            }
        }
        var permutationDivisor = 1;
        for (var key in letterCount) {
            permutationDivisor = permutationDivisor * factorial(letterCount[key]);
        }
        var length = string.length - p1.length;
        var curr = p1.length;
        var permutations = factorial(length) / permutationDivisor;
        var index = p2.indexOf(string.charAt(curr));

        permutations = (permutations / length);
        permutations = permutations * index;
        counter += permutations

        permute(p1 + string.charAt(curr), p2.substring(0, index) + p2.substring(index + 1), p3);
    }
    permute('', letters, 0)
    counter = counter + 1;
    return counter;
}

console.log(anagramPosition("STARK"));
