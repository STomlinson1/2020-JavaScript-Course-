// Write a getCard() function which returns a random playing card object

const getCard = () => {
	let valueArr = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];
	let suitArr = [ 'clubs', 'hearts', 'diamonds', 'spades' ];
	return { value: pick(valueArr), suit: pick(suitArr) };
};

const genRandNum = (min, max) => {
	return Math.floor(Math.random() * (max - min)) + min;
};

const pick = (arr) => {
	return arr[genRandNum(0, arr.length)];
};

for (let i = 0; i < 100; i++) {
	console.log(getCard());
}
