/* 
GOALS
  add methods to objects
  use new objext shorthand syntax
  use computed properties
  understand prototypes
  explain how 'this' works
*/

// shorthand properties

// example 1
const getStats = (arr) => {
	const max = Math.max(...arr);
	const min = Math.min(...arr);
	const sum = arr.reduce((sum, r) => sum + r);
	const avg = Number((sum / arr.length).toFixed(1));
	return {
		// new syntax to return an new object
		max,
		min,
		sum,
		avg
	};
};

const reviews = [ 4.5, 5.0, 3.4, 2.8, 4.9, 2.2 ];
const stats = getStats(reviews);
console.log(stats);
