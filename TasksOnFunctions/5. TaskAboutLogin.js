/*
Write a function which asks a user to enter his login and parole , then checks it(Correct Login - "Adm" and parole = "Я главный"). 
*/
let loggin= prompt("Enter your login,pls");
if (loggin=="Adm") {

 let pr= prompt("Enter the parole");
	if (pr=="Я главный") {
		alert("Здравствуйте");}
	else if (pr=='' || pr==null) {alert("Cancelled");}
	else {alert("Неверный пароль");}

 }
else if (loggin=='' || loggin==null) { alert("Cancelled");}
else {alert("Ich kenne dich nicht") ;}
