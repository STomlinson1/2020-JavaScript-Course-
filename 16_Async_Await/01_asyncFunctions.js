/* 
Async Functions

at its core, asycn functions are syntatical sugar for promises
2 keywords: asycn, await

The async keyword:
  Async functions always return a promise.
  If the function returns a value, the promise will be resolved with that value.
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
		console.log(res.data); //only runs once previous line is completed
	} catch (e) {
		console.log('In Catch', e);
	}
}
// getPlanets().catch((error) => {
// 	console.log('In Catch');
// 	console.log(error);
// });
getPlanets();

// Refactor from callback hell lesson
const moveX = (element, amount, delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const bodyBoundary = document.body.clientWidth;
			const elRight = element.getBoundingClientRect().right;
			const currLeft = element.getBoundingClientRect().left;
			if (elRight + amount > bodyBoundary) {
				reject({ bodyBoundary, elRight, amount });
			} else {
				element.style.transform = `translateX(${currLeft + amount}px)`;
				resolve();
			}
		}, delay);
	});
};

const btn = document.querySelector('button');
async function animateRight(el) {
	await moveX(el, 150, 1000);
	await moveX(el, 150, 1000);
	await moveX(el, 150, 1000);
	await moveX(el, 150, 1000);
	await moveX(el, 150, 1000);
	await moveX(el, 150, 1000);
}

animateRight(btn).catch((error) => console.log('All Done', error));

// moveX(btn, 150, 1000)
// 	.then(() => moveX(btn, 150, 1000))
// 	.then(() => moveX(btn, 150, 1000))
// 	.then(() => moveX(btn, 150, 1000))
// 	.then(() => moveX(btn, 150, 1000))
// 	.then(() => moveX(btn, 150, 1000))
// 	.then(() => moveX(btn, 150, 1000))
// 	.then(() => moveX(btn, 150, 1000))
// 	.catch(({ bodyBoundary, amount, elRight }) => {
// 		console.log(`Body is ${bodyBoundary}px wide`);
// 		console.log(`Element is at ${elRight}px, ${amount}px is too large`);
// 	});

// *Sequential requests
// async function get3Pokemon() {
// poke1,2,3 are storing values
// 	const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
// 	const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
// 	const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');

// 	console.log(poke1.data);
// 	console.log(poke2.data);
// 	console.log(poke3.data);
// }

// *Parallel Request
async function get3Pokemon() {
	// the three request will be sent at the same time
	// they are promises
	const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
	const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
	const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
	// await the response that comes back and store the resolved value
	// create an array containing the resolved values
	// the following promise is resolved when all three promises are resolved
	const results = await Promise.all([ prom1, prom2, prom3 ]);
	printPokemon(results);
}

function printPokemon(results) {
	for (let pokemon of results) {
		console.log(pokemon.data.name);
	}
}

get3Pokemon();

//* in sequence
async function lightShow() {
	await changeBodyColor('teal', 1000);
	await changeBodyColor('pink', 1000);
	await changeBodyColor('red', 1000);
	await changeBodyColor('blue', 1000);
}

//* in parallel
// async function lightShow() {
// 	const p1 = changeBodyColor('teal', 1000);
// 	const p2 = changeBodyColor('pink', 1000);
// 	const p3 = changeBodyColor('red', 1000);
// 	const p4 = changeBodyColor('blue', 1000);
// 	await p1;
// 	await p2;
// 	await p3;
// 	await p4;
// }

function changeBodyColor(color, delay) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.body.style.backgroundColor = color;
			resolve();
		}, delay);
	});
}

lightShow();
