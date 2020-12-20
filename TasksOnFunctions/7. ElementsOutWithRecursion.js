/*
Print the array elements without loop.
*/
let mas = [1,2,3,4,5,6];
function PrintMas (mas) {
	mas.slice(0,1);
	console.log(mas[0]);
     if ( mas.length > 0) {
		 return (PrintMas(mas) );
	 }   

}
console.log(PrintMas(mas));
