/* 
SPREAD

  spread syntax allows an iterable such as an array to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs(for object literals) are expected

  3 use cases:
    in function calls
    in array literals
    in object literals
*/

// Spread in function calls
const nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
console.log(Math.max(...nums));

// Spread in array literals
const animals = [ 'dog', 'cat', 'hamster' ];
const animals2 = [ 'chickem', 'bird', 'lion' ];

const all = [ ...animals, ...animals2 ];
console.log(all);

// useful for copying  1D array
const animalsCopy = [ ...animals ];

//spread each character of a string into an array
const arrLetters = [ ...'abcefg' ];
console.log(arrLetters);

let letters = arrLetters.join('');
console.log(letters);
console.log(letters.split('').reverse().join(''));

// SPREAD in Object Literals
//  copies properties from one objext into another object literal
// WILL NOT CLONE NESTED OBJECTS
// Can only spread objects inside other objects

const feline = {
	legs   : 4,
	family : 'Felidae'
};

const canine = {
	family : 'Canine',
	furry  : true
};

const dog = {
	...canine,
	isPet    : true,
	adorable : true
};

const houseCat = {
	...feline,
	isGrump     : true,
	personality : 'unperdictable'
};

const catDog = {
	...canine,
	...feline
};

console.log(dog, houseCat, catDog);

// arrays and strings can be spread into objects
