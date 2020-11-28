let value = 88;
	let Sum = 0;
function SumOfElements (Value) {
  	let Sum = 0;
	let StringValue = Value.toString();
	let Mas = StringValue.split();
	for (let i = 0 ; i< Mas.length; i++) {
			Sum += parseInt((Mas[i]));

	};
	console.log(Sum);
 

}
console.log(SumOfElements (value));