/* 
Rest
  its like spread but not
  used to make functions that can take multiple arguments
*/

// Old way:
function sum() {
	const argsArr = [ ...arguments ];
	return argsArr.reduce((total, curVal) => total + curVal);
}
console.log(sum(1, 2, 3));

// also three dots like Spread
// must be put into the parameter list of a function definition
// collects the rest of the arguments into an array
// rest parameter must be last
function add(...nums) {
	return nums.reduce((total, curVal) => {
		return total + curVal;
	});
}

console.log(add(1, 2, 3, 4, 5));

function fullName(first, last, ...titles) {
	console.log('first', first);
	console.log('last', last);
	console.log('titles', titles);
}

fullName('stephon', 'tomlinson', 'III', 'King');

const multiply = (...nums) => {
	return nums.reduce((total, curVal) => {
		return total * curVal;
	});
};

console.log(multiply(5, 6, 2));
