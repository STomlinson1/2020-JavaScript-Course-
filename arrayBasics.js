/* 
Goals of section:
  work with arrays
  write object literals
  understand reference types
  use common array/oject methods

Arrays:
  Ordered collection of values

  */

// To make an empty array
let students = [];

// An array of strings
let colors = ['red','orange','green','purple'];

// An array of numbers
let lottoNums = [18,22,34,64,26,11];

// A mixed array
let stuff = [true, 68, 'car', null];

// Example 1
let shoppingList = ['cheese','cereal','ice'];
console.log(shoppingList);
console.log(shoppingList[1]);

//Access last element of array
console.log(shoppingList[shoppingList.length - 1]);