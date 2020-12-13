/*
Write a function shuffle(array) which stirs in random way elements of array.
*/

function shuffle(array) {
	function sortByRandom (arr) {
   arr.sort( () => Math.random() );

};
  array.sort(sortByRandom);
}

let arr = [1, 2, 3];
shuffle(arr);
console.log(arr);