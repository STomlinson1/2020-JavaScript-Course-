/* 
EVERY: tests whether all elements in the array pass the provided function. returns a boolean value

SOME: Similar to every, but returns true if any of the array elements pass the test function
*/

// Example 1
const words = [ 'dog', 'dig', 'log', 'bag', 'wag' ];

const allThreeLetterWords = words.every((word) => word.length === 3);
console.log(allThreeLetterWords);

const AllLastLetterG = words.every((word) => {
	const last = word.length - 1;
	return word[last] === 'g';
});
console.log(AllLastLetterG);

// Example 2
const startWithD = words.some((word) => word[0] === 'd');
console.log(startWithD);
