/*
Write a function ChangeText which after a clicking a button by user changes a text.
*/
<input type="text" value="???" id="test">
<input type="submit" onclick="ChangeText()">
function ChangeText {
	let LinkToText = document.getElementById("test");
	LinkToText.value= "!!!";
} 
