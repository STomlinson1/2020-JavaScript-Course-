const student = {
	firstName : 'Stephon',
	lastName  : 'Tomlinson',
	strengths : [ 'Music', 'Art' ],
	exams     : {
		midterm : 92,
		final   : 88
	}
};

const avg = (student.exams.final + student.exams.midterm) / 2;
console.log(avg);
console.log(student.strengths[1]);

// another common form is to have an array of objects
const shoppingCart = [
	{
		product  : 'Jenga Classic',
		price    : 6.88,
		quantity : 1
	},
	{
		product  : 'Echo Dot',
		price    : 29.99,
		quantity : 3
	},
	{
		product  : 'Fire Stick',
		price    : 39.99,
		quantity : 2
	}
];

console.log(shoppingCart[1].product);

//example of nesting object within objects
const game = {
	player1 : {
		userName  : 'Blue',
		playingAs : 'X'
	},
	player2 : {
		userName  : 'Green',
		playingAs : 'O'
	},
	board   : [ [ 'O', null, 'X' ], [ 'X', 'O', 'X' ], [ null, 'O', 'X' ] ]
};
