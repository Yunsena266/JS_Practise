/*
Write a function-constructor which creates objects with three methods: 

read() requests two values with prompt and saves them in the methods of objects. 
sum() return the sum of the input properties. 
mul() return the composition of the input properties.
*/




function Calculator () {
	this.read = function () {
            let value1 = prompt("Please, enter first value");
            let value2 = prompt("Please, enter second value");
            this.Number1 = value1;
            this.Number2 = value2;
       },
this.sum = function () {
            return this.Number1 + this.Number1
       },
this.mul = function () {
            return this.Number1 * this.Number1
       },
};
let calculator = new Calculator();

calculator.read();
alert( "Sum=" + calculator.sum() );