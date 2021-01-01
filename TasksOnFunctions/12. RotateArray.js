/*
Rotate an array to the left 1 position
*/


function RotateArr(arr) {
	let last = arr.pop();
        arr.unshift(last);
}
console.log(RotateArr([1,3,4]));