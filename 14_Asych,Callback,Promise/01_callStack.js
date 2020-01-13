/* 
CALL STACK

The mechanism the JS interpreter uses to keep track of its place in a script that calls multiple functions.special
How JS "knows" what function is currently being run and what functions are called within that function, etc.

When a script calls a function, the interpreter adds it to the call stack and then starts carruing out the function.
Any functions that are called ny that function are added to the call stack further up, and run where their calls are reached.
When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last codes listing.

*/
// example 1
// examining the call stack in the dev stools

const repeat = (str, times) => {
	let result = '';
	for (let i = 0; i < times; i++) {
		result += str;
	}
	return result;
};

const scream = (str) => {
	return str.toUpperCase() + '!!!';
};

const getRantText = (phrase) => {
	let text = scream(phrase);
	let rant = repeat(text, 8);
	return rant;
};

const makeRant = (phrase, el) => {
	const h1 = document.createElement('h1');
	h1.innerText = getRantText(phrase);
	el.appendChild(h1);
};

makeRant('I hate mayonnaise', document.body);
makeRant('if you have to cough, please cover your mouth', document.body);

/* 
JavaScript is Single Threaded

At any given point in time, that single JS thread is running at most one line of JS code
*/

console.log('I happen first');
setTimeout(function() {
	console.log('I happen third');
}, 3000);
console.log('I happen second');

/* 
The browser does the work!
For the above code, the browser takes over and sets a timer
*/

/* 
HOW BROWSERS HELP JAVASCRIPT:
Browers come with Web APIs that are able to handle certain tasks in the background ( like making requests or setTimeout)
The JS call stack recognizes these Web API functions and passes them off to the browser to take care of.
Once the browser finishes those tasks, they return are pushed onto the stack as a callback.
*/
