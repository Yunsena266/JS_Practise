let OurNumber = Number(prompt('Enter the number',1));
function getDivisors (Value) {
	  let mas = [];
      for (let i = 0; i < Value; i++) {
          if ( Value % i == 0) {
              mas.push(i) ;
		}
          
      }
	  return mas;
     

}
alert(getDivisors (OurNumber));