/*
Wrute a function sortByAge(users) which accepts an array of objects with property age and sort them by it. 
*/

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

function sortByAge (arr) {
   arr.sort( (a,b) => ( a.age > b.age ? 1 : -1));

};
sortByAge(arr)
console.log(arr);