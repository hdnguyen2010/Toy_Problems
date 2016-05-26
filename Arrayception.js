/*
Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.

Examples
Input								Output
array:
[ [ 5 ], [ [ ] ] ]					= 2
array:
[ 10, 20, 30, 40 ]					= 1
array:
[ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ]	= 4
array:
[ ]									= 0
array:
[ [ [ ] ] ]							= 0
*/

function arrayception (array) {
  var start = 0;
  for(var i = 0; i < array.length; i++) {
      if(array[i].length === 0){
          var counter = 0;
      }
      if(Array.isArray(array[i])){
          counter = arrayception(array[i]);
          if(counter > 0) {
              counter ++;
          }
      }
      else{
        counter = 1;
      }
      if(counter > start) {
        start = counter;
      }
  }
  return start;
}
