/* 
OBJECTS
  Objects are collections of properties.
  Properties are a key-value pair.
  Rather than accessing data using an index, we use custom keys
*/

// {} - object literal
// just like arrays, when you store an object in a variable, it is a reference to that object
const fitBitData = {
	totalSteps       : 308727,
	totalMiles       : 211.7,
	avgCalorieBurn   : 5755,
	workoutsThisWeek : '5 of 7',
	avgGoodSleep     : '2:13'
};

console.log(fitBitData);
console.log(fitBitData.totalMiles);
console.log(fitBitData.avgGoodSleep);

// All keys are converted to strings (except for symbols)

const numbers = {
  100: 'one hundred',
  16: 'sixteen'
};
//brack notation to access object property
console.log(numbers[100]);

//initialize empty object
const userReviews = {};
//add key value pairs to object with both notations
userReviews['queenBee49'] = 4.0;
userReviews.mrSmith78 = 3.5;
console.log(userReviews);
//update value in object
userReviews.mrSmith78 += 2;
console.log(userReviews);