/*
Task description: Write a code which sort an array by descending.
*/

function sortArray (a,b) {
	if (a > b) return -1;
  if (a == b) return 0;
  if (a < b) return 1;
}
console.log([1,4,9].sort(sortArray));
