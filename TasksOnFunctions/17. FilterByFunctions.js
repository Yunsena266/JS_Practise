/*
There is built-in method arr.filter(f) for arrays. 
It filters all elements with functions f. If it returns true, then element will added to returning array.

Write a group of "ready for using" filters:

inBetween(a, b) –between a и b (including).
inArray([...]) – existed in this array.

*/


function inBetween(a, b) {
	return function (item) {
		return ( item <= b & item >= a) 
	}
	
};

function inArray([...]) {
return function(item) {
	let ar = [...];
	return( ar.includes(item)) 
		  }
	
};

let arr = [1, 2, 3, 4, 5];
console.log( arr.filter(inArray([1, 2, 12])) );
console.log( arr.filter(inArray([1, 2, 12])) );
