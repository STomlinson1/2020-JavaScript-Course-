/* 
Async Functions

at its core, asycn functions are syntatical sugar for promises
2 keywords: asycn, await

The async keyword:
  Async functions always return a promise.
  If the function returns a valie, the promise will be resolved with that value.
  If the function throws an exception, the promise will be rejected

The await keyword:
  We can only use the await keyword inside of functions declared with async
  await will pause the executon of the function, waiting for a promise to be resolved
*/

async function greet() {
	// return the resolved value
	return 'Hello';
}

greet().then((val) => {
	console.log(val);
});

async function add(x, y) {
	if (typeof x !== 'number' || typeof y !== 'number') {
		throw 'X and Y must be numbers!';
	} else {
		return x + y;
	}
}

add('e', 'r')
	.then((val) => {
		console.log('Promise resolved with: ', val);
	})
	.catch((error) => {
		console.log('Promise rejected with: ', error);
	});

// using await and error handling
async function getPlanets() {
	try {
		const res = await axios.get('https://swapi.co/api/planets/');
		console.log(res.data);
	} catch (e) {
		console.log('In Catch', e);
	}
}

// getPlanets().catch((error) => {
// 	console.log('In Catch');
// 	console.log(error);
// });

getPlanets();
