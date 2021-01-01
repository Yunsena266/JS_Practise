/*
Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
*/

function getVAlue (arr1, arr2) {
	let Arr = [];
	for (let i = 0; i < arr1.length; i ++) {
		if (!arr2.includes(arr1[i])) {
				Arr.push(arr1[i]);
			}
        }
  for (let i = 0; i < arr2.length; i ++) {
		if (!arr1.includes(arr2[i])) {
				Arr.push(arr2[i]);
			}
        }
        	console.log(Arr);
}
console.log(getVAlue ([1,2,3,4], [1,4,8,9]));