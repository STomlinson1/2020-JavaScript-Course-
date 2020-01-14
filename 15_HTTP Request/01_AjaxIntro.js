/* 
AJAX: Asynchronous JavaScript And XML/JSON

The idea of AJAX is using request we can make via javaScript Asynchronously to load or send data from a server. We communicate with the server behind the scenes instead of reloading the entire page. The request is sent based off a keyboard event.  The response is in JSON format. JSON is a format for sending data.

JSON and XML are ways to format data to send it from a server to another server or a server to a browser

JSON - JavaScript Object Notation
  JSON is not javaScript but it looks like javaScript
  Some differences: every key in JSON must be a string with quotes, cannot store more complicated things like functions

*/

/* 
Old way of making request: XMLHttpRequest:
  The "original" way of sending request via JS.
  Does not support promises.
  Clunky syntax
  Making a nested callback becomes a lot of messy code
*/

const firstRequest = new XMLHttpRequest();
firstRequest.addEventListener('load', function() {
	console.log('It Worked');
	const data = JSON.parse(this.responseText);
	const filmURL = data.results[0].films[0];
	const filmReq = new XMLHttpRequest();
	filmReq.addEventListener('load', function() {
		console.log('Second request worked');
		const filmData = JSON.parse(this.responseText);
		console.log(filmData);
	});
	filmReq.addEventListener('error', (e) => {
		console.log('Error!', e);
	});
	filmReq.open('GET', filmURL);
	filmReq.send();

	// console.log(data);
	// for (let planet of data.results) {
	// 	console.log(planet.name);
	// }
});
firstRequest.addEventListener('error', () => {
	console.log('Error!');
});
firstRequest.open('GET', 'https://swapi.co/api/planets/');
firstRequest.send();
console.log('Request Sent!');
