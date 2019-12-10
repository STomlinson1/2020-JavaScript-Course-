// Number guessing game
const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (guess !== target) {
	console.log(guess);
	guess = Math.floor(Math.random() * 10);
}
console.log(target);
// can also be written as:
// not very intuitive
while (true) {
	if (target === guess) break;
	console.log(guess);
	guess = Math.floor(Math.random() * 10);
}
console.log(target);
