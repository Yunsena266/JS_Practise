/*
Task description: Write a function which convert a string like «my-short-string» to «myShortString».
*/
function camelize(str){
	let Parts = camelize.split('-');
	return Parts.join();
}
console.log(camelize("background-color"));
