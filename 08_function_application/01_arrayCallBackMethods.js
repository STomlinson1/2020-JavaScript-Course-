/* 
ARRAY CALLBACK METHODS
  arrays come with many built-in methods that accept callback functions
  
  Useful arrary methods that expect a callback method as an argument:

  FOREACH: calls the function once per element in the array

	MAP: creates a new array with the results of calling a callback on every element in the array
	
	FIND

*/

// Example 1
const numbers = [ 20, 21, 22, 23, 24, 25, 26, 27 ];
//here num is a placeholder that represents each element of the array, second parameter is the index
numbers.forEach(function(num, index) {
	console.log(index, num);
});

function printTriple(n) {
	console.log(n * 3);
}

numbers.forEach(printTriple);

// Example 2
const books = [
	{
		title   : 'Good Omens',
		authors : [ 'Terry Prat', 'Neil Gaiman' ],
		rating  : 4.25
	},
	{
		title   : 'Bone: The Complete Edition',
		authors : [ 'Jeff Smith' ],
		rating  : 4.42
	},
	{
		title   : 'American Gods',
		authors : [ 'Neil Gaiman' ],
		rating  : 4.11
	},
	{
		title   : 'A gentleman in Moscow',
		authors : [ 'Amor Twoles' ],
		rating  : 4.36
	}
];

books.forEach((book) => {
	console.log(book.title);
});
