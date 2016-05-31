/*
Even Occurrence

Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

Examples
Input                               Output
arr:
[ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]       = 2
arr:
[ "cat", "dog", "dig", "cat" ]      = "cat"
*/

function evenOccurrence(arr) {
  arr = arr.sort();
  var hash = {};
  var length = arr.length;
  var current;
  for (var i = 0; i < length; i++) {
    current = arr[i];
    hash[current] = hash[current] + 1 || 1;
  console.log("what is this ",hash[current])
  }
  for (var i = 0; i < length; i++) {
    console.log(hash[arr[i]])
      if (hash[arr[i]] % 2 === 0) {
          return arr[i]
      }
  }
  return null;
}


console.log(evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]))