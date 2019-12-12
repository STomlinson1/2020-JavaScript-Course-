// Function Expression
// Alternate Syntax to define functions
// Functions are objects
// significant because functions can be stored in variable to be used as an arguments

function add(x, y) {
	return x + y;
}

let sum = function(x, y) {
	return x + y;
};

console.log(add(4, 6));
console.log(sum(4, 6));
