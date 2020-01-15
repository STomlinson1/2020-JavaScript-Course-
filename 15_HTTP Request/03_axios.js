/* 
Axios is an external library used to make request
*/

// axios
// 	.get('https://swapi.co/api/planets/')
// 	.then((res) => {
// 		console.log(res.data);
// 	})
// 	.catch((err) => {
// 		console.log('In Catch Callback');
// 		console.log(err);
// 	});

const fetchNextPlanets = (url = 'https://swapi.co/api/planets/') => {
	return axios.get(url);
};

const printPlanets = ({ data }) => {
	console.log(data);
	for (let planet of data.results) {
		console.log(planet.name);
	}
	return Promise.resolve(data.next);
};

fetchNextPlanets()
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(printPlanets)
	.catch((err) => console.log('Error', err));
