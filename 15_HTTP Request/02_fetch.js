/* 
Fetch API
  The newer way of making requests via JS
  Supports Promises
  Not supported in Internet Explorer
*/

// refactor from 01_Ajaxintro.js using fetch

const prom = fetch('https://swapi.co/api/planets/')
	.then((response) => {
		if (response.ok) {
			response.json().then((data) => {
				for (let planet of data.results) {
					// console.log(planet.name);
				}
			});
		} else {
			throw new Error(`Status Code Error: ${response.status}`);
		}
	})
	.catch((err) => {
		console.log('Something went wrong with fetch');
		console.log(err);
	});

const promExample = fetch('https://jsonplaceholder.typicode.com/users')
	.then((response) => {
		if (response.ok) {
			response.json().then((data) => {
				for (let object of data) {
					// console.log(object.email);
				}
			});
		} else {
			throw new Error(`Status Code Error: ${response.status}`);
		}
	})
	.catch((error) => {
		console.log('An Error has occurred');
		console.log(error);
	});

// Fetch Chaining
const prom1 = fetch('https://swapi.co/api/planets/')
	.then((response) => {
		if (response.ok) {
			return response.json();
		} else {
			throw new Error(`Status Code Error: ${response.status}`);
		}
	})
	.then((data) => {
		for (let planet of data.results) {
			// console.log(planet);
		}
		const filmURL = data.results[0].films[0];
		return fetch(filmURL);
	})
	.then((response) => {
		if (response.ok) {
			return response.json();
		} else {
			throw new Error(`Status Code Error: ${response.status}`);
		}
	})
	.then((data) => {
		// console.log('Fetched First Film, based off first planet');
		// console.log(data.title);
	})
	.catch((response) => {
		console.log(response);
	});

// Fetch Chaining Refactor
const checkStatusAndParse = (response) => {
	if (response.ok) {
		return response.json();
	} else {
		throw new Error(`Status Code Error: ${response.status}`);
	}
};

const printPlanets = (data) => {
	console.log('Loaded 10 more planets');
	for (let planet of data.results) {
		console.log(planet.name);
	}
	return Promise.resolve(data.next);
};

const fetchMorePlanets = (url) => {
	return fetch(url);
};

fetch('https://swapi.co/api/planets/')
	.then(checkStatusAndParse)
	.then(printPlanets)
	.then(fetchMorePlanets)
	.then(checkStatusAndParse)
	.then(printPlanets)
	.catch((response) => {
		console.log(response);
	});
