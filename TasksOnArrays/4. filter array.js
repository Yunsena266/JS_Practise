function filterRange(arr, a, b) {
	return arr.filter(item => item > a && item < b);
}
console.log(filterRange([1,2,3,4], 1, 4));