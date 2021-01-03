/*
There is an array arr.
Create function unique(arr), which return the array of unique, not duplicated values from arr.
*/

function unique(arr) {
	let set = new Set ();
     for (let value of arr) {
           set.add(value);
      }
	for (let user of set) {
    alert(user);
}
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); 