/* 
PROMISES

A Promise is an object representing the eventual completion or failure of asynchronous operation

A pattern for writing async code.

A promise is a returned object to which you attach callbacks, instead of passing callbacks into a function
*/

// Promise syntax
// const willGetYouDog = new Promise((resolve, reject) => {
// 	const rand = Math.random();
// 	if (rand < 0.5) {
// 		resolve();
// 	} else {
// 		reject();
// 	}
// });

// how to interact with a promise
// what code will run when a promise is resolved vs rejected
// every promise has a 'then' method

// 'then' will run if the promise is resolved
// willGetYouDog.then(() => {
// 	console.log('Yay we got a dog');
// });

// willGetYouDog.catch(() => {
// 	console.log('No Dog');
// });

const makeDogPromise = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const rand = Math.random();
			if (rand < 0.5) {
				resolve();
			} else {
				reject();
			}
		}, 3000);
	});
};

makeDogPromise()
	.then(() => {
		console.log('Yay we got a dog');
	})
	.catch(() => {
		console.log('No Dog');
	});
