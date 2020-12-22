/*
Write a function countBs, which accept a string as an argument, and return the amount of symbols “B”, contained in the string.
Then write a function countChar, which works as countBs, but accepts the second parameter — symbol, which we'll search in the string. 

*/


function countBs (Value) {
         let sum  = 0;
         for (let i = 0; i < Value.length; i ++) {
              if ( Value[i] = 'B') {
                     sum += 1;
            }
         return sum;
       }
};

function countChar (Value,SymbolValue) {
         let sum  = 0;
         for (let i = 0; i < Value.length; i ++) {
              if ( Value[i] = SymbolValue) {
                     sum += 1;
            }
         return sum;
       }
};
console.log(countBs ("BBC"));