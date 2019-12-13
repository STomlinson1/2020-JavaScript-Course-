/* 
  MAP: creates a new array with the results of calling a callback on every element in the array
*/

// Example 1
const numbers = [ 20, 21, 22, 23, 24, 25, 26, 27 ];
const words = [ 'asap', 'byob', 'rsvp', 'diy' ];

const doubles = numbers.map((num) => {
	return num * 2;
});

console.log(numbers);
console.log(doubles);

const evenOrOdd = numbers.map((num) => {
	if (num % 2 === 0) {
		return { num: num, isEven: true };
	} else {
		return { num: num, isEven: false };
	}
});

console.log(evenOrOdd);

const newWords = words.map((word) => {
	// uppercase word, split word into an array of each character, join it back together seperated by '.'
	return word.toUpperCase().split('').join('.');
});

console.log(newWords);

// implicit return
const doubles1 = numbers.map((n) => n * 2);
console.log(doubles1);

const parityList = numbers.map((n) => (n % 2 === 0 ? 'even' : 'odd'));
console.log(parityList);
