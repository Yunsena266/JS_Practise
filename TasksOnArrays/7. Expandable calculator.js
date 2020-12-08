/*
Write a function constructor Calculator, which creates expandable objects of calculator. 
*/


function Calculator () {
     this.methods = {
       "-": (a, b) => a - b,
    "+": (a, b) => a + b
     };

     this.calculate = function (value) {
         let Value = value.split(' ' )
          A = Number( Value[0]);
          op = Value[1];
          B = Number(Value[2]);
          return this.methods[op](A,B);
     }
     this.addMethod = function (name, func) {
        methods[name] = func;

     }
}
    let calc = new Calculator ();
    console.log(calc.calculate("1 + 2"));



