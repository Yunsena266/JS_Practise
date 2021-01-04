/*
Anangrams are words, which have the same letters in the same amount, but they're arranged in the another order.

For example:

nap - pan
ear - are - era
cheaters - hectares - teachers
Write a function aclean(arr), which return an array of words, cleansing from anagrams.
Only one word should stay from each group of anagrams, no matter which.
*/

function aclean(arr) {
	let map = new Map();
	let set = new Set ();
	for (let i = 0; i < arr.length; i ++) {
		let Parts = arr[i].toLowerCase().split("").sort().join();
		map.set(Parts, arr[i]);
	};
	for (let value of map.values()) {
		console.log(value);
		
	};
	
	
}


let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) );  
