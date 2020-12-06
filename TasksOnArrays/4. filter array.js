/*
Task description: Write a function filterRange(arr, a, b), which accept array arr, search elements between a и b and return array from these elements.
*/
function filterRange(arr, a, b) {
	return arr.filter(item => item > a && item < b);
}
console.log(filterRange([1,2,3,4], 1, 4));
