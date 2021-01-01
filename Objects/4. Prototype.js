/*
There is an object:

let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};
With property __proto__ set a prototype in such way that searching of any property was executed in this way: pockets → bed → table → head. 
For example, pockets.pen should return a value 3 (found in the table) and value 1 (found in the head)
*/


let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__ : head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};
console.log(pockets.pen)