for (let i = 1; i <= 10; i++) {
	console.log('Outer Loop', i);
	for (let j = 1; j <= 3; j++) {
		console.log(' Inner Loop', j);
	}
}

const gameBoard = [ [ 4, 32, 8, 4 ], [ 64, 8, 32, 2 ], [ 8, 32, 16, 4 ], [ 2, 8, 4, 2 ] ];

let totalScore = 0;
for (let i = 0; i < gameBoard.length; i++) {
	for (let j = 0; j < gameBoard[i].length; j++) {
		totalScore += gameBoard[i][j];
	}
}
console.log(totalScore);
