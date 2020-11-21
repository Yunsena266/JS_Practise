let OurNumber = '998'
function Sum (Value) {
      let mas = Value.split('')
      let sum = 0;
      for (let i = 0; i < mas.length; i++) {
          sum += Number(mas[i]);

      }
      return sum;


}
console.log(Sum(OurNumber))
