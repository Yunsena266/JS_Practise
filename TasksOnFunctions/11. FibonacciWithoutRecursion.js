/*
Print the first 10 Fibonacci numbers without recursion
*/

let arr = [1,2];
for (let a of arr){
  console.log(a)
}
let sum;
for (let i = 0; i< 8 ;i++)
{
	sum = arr.reduce((x,y) => (x + y)) ;
	console.log(sum);
	arr.push(sum);
	
}