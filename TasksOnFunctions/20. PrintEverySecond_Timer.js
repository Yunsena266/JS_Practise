/*
Write a function printNumbers(from, to), which prints a number per one second, beginning from "from" and finishing with "to".

Write a two variants of code.

Using setInterval.
Using recursive setTimeout.

*/



/*
Code with setInterval:
*/
 let i = 0;
setInterval(function printNumbers(from, to) {
  let value = 0;
   if ( i === from) {
         value =  i
  }  else {
    value =  from
  };
	if (i >= from && i <= to) {
		console.log(i);
	}
	i += 1;
	
} ,1000,1,3);






/*
Code with recursive setTimeout
*/



let timerId = setTimeout(function printNumbers(from, to) {
	console.log(from);
	if (from === to) {
		clearInterval(timerId);
	} else {
		timerId = setTimeout(printNumbers, 1000,from + 1,3);
	}
	
} ,1000,1,3);













