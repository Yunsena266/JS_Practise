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
