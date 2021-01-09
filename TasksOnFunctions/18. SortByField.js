/*
There is an array of objects, which we should sort:

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];
An usual way could be like that:

// by name (Ann, John, Pete)
users.sort((a, b) => a.name > b.name ? 1 : -1);

// by age (Pete, Ann, John)
users.sort((a, b) => a.age > b.age ? 1 : -1);

Can we make it shorter, for example, like this?

users.sort(byField('name'));
users.sort(byField('age'));

Instead of writing a function we just could write byField(fieldName).
Write a function byField, which could be used for that.
*/

function byField(param) {
	return  (a,b) => a[param] > b[param] ? 1: -1
}