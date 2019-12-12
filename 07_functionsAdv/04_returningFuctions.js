/* 
Returning Functions
*/

function multiplyBy(num) {
	return function(x) {
		return x * num;
	};
}

//creates a function that multiplies by 3
const triple = multiplyBy(3);
//creates a function that multiplies by 2
const double = multiplyBy(2);

console.log(triple(2)); // 6
console.log(double(14)); // 28

// Example 1
function makeBetweenFunc(x, y) {
	return function(num) {
		return num >= x && num <= y;
	};
}

const isChild = makeBetweenFunc(0, 18);

console.log(isChild(7));
console.log(isChild(20));

const isInNineties = makeBetweenFunc(1990, 1999);
console.log(isInNineties(1995));
console.log(isInNineties(2005));
