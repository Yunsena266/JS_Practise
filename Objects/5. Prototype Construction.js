/*
Imagine that we have an object obj, created by function-constructor - but we don't know by which function. We want to create 
another object of the same type.
Can we do that?


let obj2 = new obj.constructor();

1) Give an example of function-constructor for obj, with which that call will work correctly.
2) Give  an example of function-constructor for obj, with which that code will work incorrectly.
*/

1) 
function Obj(name) {
  this.name = name;
}
let obj = new Obj("1");
let obj2 = new obj.constructor();



2) 
function Obj(name) {
  this.name = name;
  this.prototype = {k : 2}
}
let obj = new Obj("1");
