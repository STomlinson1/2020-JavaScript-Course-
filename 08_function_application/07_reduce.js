/* 
Reduce
  Pass in a callback
  exectures a reducer runction on each element of the array, resulting in a single value
  syntax: 
          accumulator: stores end result
          currentValue: each individual element of array
    [1,2,3,4,5].reduce((accumulater, currentValue)=>{
      return accumulator + currentValue;
    });
*/

[ 3, 5, 7, 9, 11 ].reduce((accumulator, currentValue) => {
	//accuulator starts as first element 3
	//current value starts as 5
	//after suming them, accumulator is updated with new value and currentValue moves to next element
	return accumulator + currentValue;
});

// example 1
const nums = [ 3, 4, 5, 6, 7 ];

const product = nums.reduce((total, currentVal) => {
	return total * currentVal;
});

console.log(nums, product);

// example 2
// can be used to find the maxium value in array
const grades = [ 87, 64, 96, 92, 88, 99, 73, 70, 64 ];

const maxGrade = grades.reduce((max, currentVal) => {
	/* if (currentVal > max) return currentVal;
  return max; */
	return Math.max(max, currentVal);
});
console.log(maxGrade);

// Example 3. start sum at different value
// starts sum at 1000 and currentValue at index 0
const sum = [ 10, 20, 30, 40, 50 ].reduce((sum, currentValue) => {
	return sum + currentValue;
}, 1000);
console.log(sum);

// example 4. Using reduce to add to an objext

const votes = [ 'y', 'y', 'n', 'y', 'y', 'n', 'n', 'y' ];

//set tally to an object with the ammount of y/n votes
const tally = votes.reduce((tally, vote) => {
	//if tally exist, add 1 to it, it it does, create key with a value of 1
	tally[vote] = (tally[vote] || 0) + 1;
	return tally;
	//initalize tally as an empty object
}, {});

console.log(tally);

// Example 5
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

//group the books object by creating a new object that contains arrays of books based off rating
const groupedByRating = books.reduce((groupedBooks, book) => {
	//create key of each floored rating
	const key = Math.floor(book.rating);
	//if the key does't exist, add key to object and create an empty array
	if (!groupedBooks[key]) groupedBooks[key] = [];
	//add the book to the array
	groupedBooks[key].push(book);
	return groupedBooks;
}, {});

console.log(groupedByRating);
