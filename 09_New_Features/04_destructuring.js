/* 
DESTRUCTURING

  A short, clean syntax to 'unpack':
    Values from arrays
    Properties from objexts
  Into distinct variables
*/

// ARRAY DESTRUCTURING

const raceResults = [ 'stephon', 'diana', 'branden', 'niko', 'justin', 'Mike' ];

// const gold = raceResults[0];
// const silver = raceResults[1];
// const bronze = raceResults[2];

//will create three variables from first three elements from raceResults array
const [ gold, silver, bronze ] = raceResults;
console.log(gold, silver, bronze);

//grab first and fourth element
const [ first, , , fourth ] = raceResults;
console.log(first, fourth);

//grab first element and set to winner. grab the rest of the array and set it equal to others
const [ winner, ...others ] = raceResults;
console.log(winner, others);

// OBJECT DESTRUCTURING

const runner = {
	first   : 'Stephon',
	last    : 'Tomlinson',
	country : 'America',
	title   : 'SWE'
};

//makes variables and grabs existing key names
const { last, country } = runner;

//makes a variable of a differnt name but still access the specified key
const { country: nation } = runner;
console.log(last, country, nation);

// NESTED DESTRUCTURING

const results = [
	{
		first   : 'Stephon',
		last    : 'Tomlinson',
		country : 'America'
	},
	{
		first   : 'Diana',
		last    : 'Kapciova',
		country : 'Poland'
	},
	{
		first   : 'Branden',
		last    : 'Arrington',
		country : 'Kenya'
	}
];

const [ , { first: name } ] = results;
console.log(name);

// Destructuring Paramters

// create function that accepts an object
// destructure object
function print({ first, last, country }) {
	console.log(`${first} ${last} from ${country}`);
}

print(runner);

const response = [ 'HTTP/1.1', '200 OK', 'application/json' ];

//creates a funtion that accepts an array and destructures it
function parseResponse([ protocal, statusCode, contentType ]) {
	console.log(`Status: ${statusCode}`);
}

parseResponse(response);
