/* 
Sort Pt.2
syntax: arr.sort(compareFunc(a,b))
  if compareFunc(a,b) returns less than 0
    sort a before b
  if compareFunc(a,b) returns 0
    leave a and b unchange with respect to eachother
  if compareFunc(a,b) returns greater than 0
    sort b before a
*/

const prices = [ 400.5, 3000, 99.99, 35.99, 12.0, 9500 ];

prices.sort();
//must use slice to copy array into new reference
const ascSort = prices.slice().sort((a, b) => a - b);
const descSort = prices.slice().sort((a, b) => b - a);

console.log(ascSort);
console.log(descSort);

const books = [
	{
		title   : 'Good Omens',
		authors : [ 'Terry Prat', 'Neil Gaiman' ],
		rating  : 3.25,
		genres  : [ 'fiction', 'fantasy' ]
	},
	{
		title   : 'Bone: The Complete Edition',
		authors : [ 'Jeff Smith' ],
		rating  : 3.42,
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

books.sort((a, b) => a.rating - b.rating);

console.log(books);
