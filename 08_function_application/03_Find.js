/* 
FIND
  returns the value of the first element in the array that satisfies the provided testing function
*/

const movies = [ 'The Fantastic Mr.Fox', 'Mr. and Mrs. SMith', 'Mrs. Doubtfire', 'Mr. Deeds' ];

const movie = movies.find((movie) => {
	return movie.includes('Mrs');
});

console.log(movie);

const movie2 = movies.find((m) => m.indexOf('Mrs') === 0);

console.log(movie2);

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

const goodBook = books.find((book) => book.rating >= 4.3);

console.log(goodBook);

const neilBook = books.find((book) => book.authors.includes('Neil Gaiman'));

console.log(neilBook);
