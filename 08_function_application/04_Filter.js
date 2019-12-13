/* 
FILTER
  create a new array with all elements that pass the test implemented by the provided function
*/

// Example 1
const nums = [ 24, 35, 67, 54, 109, 102, 32, 9 ];

const evenNums = nums.filter((num) => {
	return num % 2 === 0;
});

//implicit version
const oddNums = nums.filter((num) => num % 2 === 1);

// console.log(evenNums);
// console.log(oddNums);

// Example 2
const books = [
	{
		title   : 'Good Omens',
		authors : [ 'Terry Prat', 'Neil Gaiman' ],
		rating  : 4.25,
		genres  : [ 'fiction', 'fantasy' ]
	},
	{
		title   : 'Bone: The Complete Edition',
		authors : [ 'Jeff Smith' ],
		rating  : 4.42,
		genres  : [ 'nonfiction', 'essay' ]
	},
	{
		title   : 'American Gods',
		authors : [ 'Neil Gaiman' ],
		rating  : 4.11,
		genres  : [ 'fiction', 'fantasy', 'graphic novel' ]
	},
	{
		title   : 'A gentleman in Moscow',
		authors : [ 'Amor Twoles' ],
		rating  : 4.36,
		genres  : [ 'fiction' ]
	}
];
//create array of boots with high rating
const goodBooks = books.filter((book) => book.rating >= 4.3);
console.log(goodBooks);

//create array of books with fantasy genre
const fantasyBooks = books.filter((book) => {
	return book.genres.includes('fantasy');
});
console.log(fantasyBooks);

//create array of books with the query in title
const query = 'The';
const result = books.filter((book) => book.title.toLowerCase().includes(query.toLowerCase()));
console.log(result);
