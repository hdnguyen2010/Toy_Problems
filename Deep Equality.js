/*
Deep Equality
Write a function that, given two objects, returns whether or not the two are deeply equivalent–meaning the structure of the two objects is the same, and so is the structure of each of their corresponding descendants.

DO NOT use JSON.stringify.
*/

deepEquals = function(a, b) {
	var result = true;
	function checker(obj1, obj2) {
		if(Object.keys(obj1).length !== Object.keys(obj2).length) {
			result = false;
			return;
		}
		for(var key in obj1) {
			if(typeof obj1[key]  === "object") {
				if(typeof obj2[key] === "object") {
					checker(obj1[key], obj2[key]);
				}
				else{
					result = false;
					return;
				}
			}
			else if(obj1[key] !== obj2[key]) {
				result = false;
				return;
			}
		}
	}
	checker(a, b);
	return result;
};  
