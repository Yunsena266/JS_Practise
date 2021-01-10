/*
Write a function sum, which works in that way: sum(a)(b) = a+b.

For example:


sum(1)(2) = 3
sum(5)(-1) = 4


*/


function sum (a)  {
	return function (b) {
            return a + b
   }
}
console.log(sum(1)(2));

