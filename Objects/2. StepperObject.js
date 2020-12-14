/*
Write an object ladder - an object which lets to up and down. Example of work is below:

ladder.showStep(); // 0 (print step in which we are on)
ladder.up(); 
ladder.up();
ladder.showStep(); // 2
ladder.down();
ladder.showStep(); // 1

*/

let Stepper = {
	CurrentStep: 0,
	showStep () {
	alert(this.CurrentStep);
},
up  () {
	this.CurrentStep += 1;
},
down () {
	this.CurrentStep -= 1;
}

};
Stepper.showStep();
Stepper.up();

console.log(Stepper.showStep());
