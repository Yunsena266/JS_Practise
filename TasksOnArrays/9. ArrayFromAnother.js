/*
There is an array of objects user where every object has name, surname and id.
Write a code which creates another array of objects with parameters: id and fullName, where fullName consists of name and surname
*/

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.forEach(function(elem) {
  console.log( {fullname : elem.name + ' '+ elem.surname,
            id: elem.id
  });

});
console.log(usersMapped);