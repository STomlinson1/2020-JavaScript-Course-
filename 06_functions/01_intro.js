/* 
FUNCTIONS
  Functions allow us to write reusable, modular code
  We define a "chunk" of code that we can then execute at a later point
  
  function funcName(){
    do something
  }
*/

// function to roll dice and print to console
function rollDie() {
	let roll = Math.floor(Math.random() * 6) + 1;
	console.log(`Rolled: ${roll}`);
}
// function to roll the dice a set ammount of times
function throwDice(numRolls) {
	for (let i = 1; i <= numRolls; i++) {
		rollDie();
	}
}
// call throwDice with argument 5
throwDice(5);

// Practice writing functions that take multiple arguments

function sum(x, y) {
	console.log(x + y);
}
sum(5, 4);

function divide(a, b) {
	console.log(a / b);
}
divide(1, 4);

function isPurple(color) {
	if (color.toLowerCase() === 'purple') {
		return true;
	} else {
		return false;
	}
}
// can also be written as
function isPurple(color) {
	return color.toLowerCase() === 'purple';
}

// check if array contains purple or magenta
function containsPurple(arr) {
	for (let color of arr) {
		if (color === 'purple' || color === 'magenta') {
			return true;
		}
	}
	return false;
}
