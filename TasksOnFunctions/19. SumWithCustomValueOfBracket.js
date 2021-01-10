/*
Write a function sum, which could be divided as follows:

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15
*/



function sum(a) {

  let CurrentSum = a;

  function f(b) {
    CurrentSum += b;
    return f;
  }

  f.toString = function() {
    return CurrentSum;
  };

  return f;
}


console.log(sum(1)(2)(3));