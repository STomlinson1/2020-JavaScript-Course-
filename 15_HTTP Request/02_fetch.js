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

const prom1 = fetch('https://swapi.co/api/planets/');
