/*
Math Object
  Contains properties and methods for mathematical constants and functions
  
  Rounding a number:
    Math.round(4.9) //5

  Absolute value:
    Math.abs(-456) //456
  
  Raise 2 to the 5th power:
    Math.pow(2,5) //32

  Removes decimal:
    Math.floor(3.9999) //3
*/

//Random number
console.log(Math.random());

//steps to generate random integers between 1 and 10
const step1 = Math.random();
const step2 = step1 * 10;
const step3 = Math.floor(step2);
const step4 = step3 + 1;
console.log(step4);

//all in one step

// returns a random integer between to values(inclusive)
function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
