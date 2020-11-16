'use strict';
let massivchik= ["пн","вт","ср","чт","пт","сб","вс"];
let vvod = prompt("введите день недели","пн");
let n=0;
function findindex(vvodd){
 ll: for(let i=0;i<massivchik.length;i++) {
       if (vvodd==massivchik[i]) {
           i+=1;
           alert("номер недели: "+i);
           break ll;
        }
       else { 
       if (n==6) {
           alert("ERROR!");
           break ll;
                 }
            }n+=1;

        } 
       
    }


findindex(vvod);