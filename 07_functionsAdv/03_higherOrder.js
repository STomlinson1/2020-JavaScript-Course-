/* 
HIGHER ORDER FUNCTIONS
  Functions that operate on/with other functions.
  They can:
    Accept other functions as arguements.
    Return a function
*/

function add(x, y) {
	return x + y;
}

const subtract = function(x, y) {
	return x - y;
};

function multiply(x, y) {
	return x * y;
}

const divide = function(x, y) {
	return x / y;
};

//store each function in an array
const operations = [ add, subtract, multiply, divide ];
//access a function of an array
console.log(operations[1](10, 5));
//loop over each function of an array and call it
for (let func of operations) {
	let result = func(30, 5);
	console.log(result);
}

// store function in object
const thing = {
	doSomething : multiply
};
console.log(thing.doSomething(6, 8));

// Functions as arguments

// Example 1
function callThreeTimes(f) {
	f();
	f();
	f();
}

function cry() {
	console.log("BOO HOO I'M SO SAD!");
}

function rage() {
	console.log("I'm SO MAD!");
}

//callThreeTimes(cry);

//Example 2
function repeatNtimes(action, num) {
	for (let i = 0; i < num; i++) {
		action();
	}
}

//repeatNtimes(cry, 5);

function pickOne(f1, f2) {
	let rand = Math.random();
	console.log(rand);
	if (rand < 0.5) {
		f1();
	} else {
		f2();
	}
}

pickOne(cry, rage);
