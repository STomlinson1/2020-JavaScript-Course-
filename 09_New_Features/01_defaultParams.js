// to add default pararmeters to functions

// old way of doing it:
function multiply(x, y) {
	// if(typeof y === 'undefined'){
	//   y = 1;
	// }

	//type of returns a string
	//if typeof y is undefined, set it to 1
	y = typeof y === 'undefined' ? 1 : y;
	return x * y;
}

// New default parameter syntax
function multi(x, y = 1) {
	return x * y;
}

//give greeting a default value if greeting isn't passed
const greet = (person, greeting = 'hi') => {
	console.log(`${greeting} ${person}`);
};

greet('stephon');

// !Default paramters must come after
