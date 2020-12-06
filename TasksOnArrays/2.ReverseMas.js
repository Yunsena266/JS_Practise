/*
Task description: The array of numbers is given. Reverse it without special method "reverse".
*/
let arr = [1,2,3,4,5];
let ReverseArr = [];
for (let i= arr.length - 1; i >= 0; i -- ) {
  ReverseArr.push(arr[i]);

}
console.log(ReverseArr);
