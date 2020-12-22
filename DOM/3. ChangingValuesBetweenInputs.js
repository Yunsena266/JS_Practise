/*
Repeat a behavior of button after clicking on it (it carries out the exchange between two inputs)
*/

<button onclick="ChangeValue()">Click on me</button>
<input type="text" id="26" value="day">
<input type="text" id="02" value="month">
function ChangeValue () {
	let First = document.getElementById("26");
	let Second = document.getElementById("02");
	First.value = Second.value;
        Second.value = First.value;
}
