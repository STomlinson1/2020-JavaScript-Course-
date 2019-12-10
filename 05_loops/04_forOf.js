/* 
For of
  format: for(variable of iterable){
    statement
  }
*/

let subreddits = [ 'soccer', 'cringe', 'books', 'football' ];
// regular for loop
for (let i = 0; i < subreddits.length; i++) {
	console.log(subreddits[i]);
}

// for of loop
for (let sub of subreddits) {
	console.log(sub);
}

// iterate over string, console log and uppercase it
for (let char of 'mississippi') {
	console.log(char.toUpperCase());
}

// comparing for vs for of
const magicSquare = [ [ 2, 7, 6 ], [ 9, 5, 1 ], [ 4, 3, 8 ] ];
// for loop
for (let i = 0; i < magicSquare.length; i++) {
	let row = magicSquare[i];
	let total = 0;
	for (let j = 0; j < row.length; j++) {
		total += row[j];
	}
	console.log(total);
}

// same code implementing for of
for (let row of magicSquare) {
	let total = 0;
	for (let num of row) {
		total += num;
	}
	console.log(total);
}

// situation where for of isn't the better choice

// print out corresponding word in both arrays
const words1 = [ 'mail', 'milk', 'bath', 'black' ];
const words2 = [ 'box', 'shake', 'tub', 'berry' ];

for (let i = 0; i < words1.length; i++) {
	console.log(words1[i], words2[i]);
}
