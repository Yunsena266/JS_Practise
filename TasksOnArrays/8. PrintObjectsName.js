/*
There is an array of objects  Users, every object of which have method user.name. Write a code which transform them into an array of names.
*/

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];


let names = users.forEach(element => console.log(element.name));

console.log( names );