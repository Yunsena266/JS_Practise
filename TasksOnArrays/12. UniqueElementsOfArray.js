/*
Write a function unique(arr), which returns an array, containing only unique elements of arr.
*/


function unique(arr) {
	let mas = [];
	for (let elem of arr) {
		if (!result.mas(elem)) {
			mas.push(elem);
		} 
		return mas;
	}
}
let arr  =  [1,2,1,3];
console.log(unique(arr));