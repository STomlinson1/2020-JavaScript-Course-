/* 
Common Array Methods:
  Push - add something to end, return new length of array
  Pop - remove something from end, return its value
  Shift - remove from start
  Unshift - add to start
  concat - merge two or more arrays, does not mutate original arrays, creates a new version
  includes - look for a value
  indexOf - return index of an element in an array
  join - creates a string from arr
  reverse - reverses an array
  Slice - copy portion of an arr
  Splice - remove/replace elements
  Sort - sorts an array
*/
// initialize array
let topSongs = [ 'First time I Saw Your face', 'God only knows', 'A day in the Life', 'Life on Mars' ];

// mutate array
// push onto the end and return new length of array
let strLength = topSongs.push('Fortunate Son');
console.log(topSongs);
console.log(strLength);

// remove last item and return its value
const nextSong = topSongs.pop();
console.log(topSongs);
console.log(nextSong);

// Unshift Example
let dishesToDO = [ 'big platter' ];
// keep adding to begining of array, return new length
dishesToDO.unshift('large plate');
dishesToDO.unshift('small plate');
dishesToDO.unshift('cereal bowl');
dishesToDO.unshift('dirty spoon');
console.log(dishesToDO);

// Shift Example
// remove from begining and return its value
dishesToDO.shift();
dishesToDO.shift();
console.log(dishesToDO);

//Concat
let fruits = [ 'apple', 'banana' ];
let veggies = [ 'brocoli', 'lettuce' ];
let meats = [ 'steak', 'burgers' ];
// merge arrays
console.log(fruits.concat(veggies)); // [ 'apple', 'banana', 'brocoli', 'lettuce' ]
console.log(veggies.concat(fruits)); // [ 'brocoli', 'lettuce', 'apple', 'banana' ]

let allFood = fruits.concat(veggies, meats); //[ 'apple', 'banana', 'brocoli', 'lettuce', 'steak', 'burgers' ]
console.log(allFood);

// includes is a boolean method, returns true or false. Tells if a value is in an array
let ingredients = [ 'water', 'corn starch', 'flour', 'cheese', 'brown sugar', 'shrimp', 'eel', 'butter' ];
// does corn exist in array
console.log(ingredients.includes('flour'));
// to check if water is in the second half of the array
// checks water after index 3
ingredients.includes('water', 3);

if (ingredients.includes('flour')) {
	console.log("I am gluten free I can't eat that");
}

// find index of an element, returns -1 if the value is not in the array
console.log(ingredients.indexOf('shrimp'));

// reverse mutates the array and reverse the order
console.log(ingredients);
console.log(ingredients.reverse());

// join, default seperator is a comma
let letters = [ 'R', 'E', 'S', 'P', 'E', 'C', 'T' ];
console.log(letters.join());
console.log(letters.join(''));
console.log(letters.join('-'));
console.log(letters.join('  '));
console.log(letters);

// Slice method returns a portion of an arrary and returns a new one
let animals = [ 'shark', 'salmon', 'whale', 'bear', 'lizard', 'tortise' ];
// starting index, ending index(does not include ending index)
let swimmers = animals.slice(0, 3);
let mammals = animals.slice(2, 4);
// starts at index 4 to the end
let reptiles = animals.slice(4);
console.log(swimmers, mammals, reptiles);

// splice method changed the contents of an array by removing or replacing existing elements and/or adding new elements
// will return removed elements
// format: splice(starting index, number of items to delete, value to insert)
animals.splice(1, 0, 'octopus');
console.log(animals);
animals.splice(5, 1, 'eagle');
console.log(animals);
animals.splice(1, 3);
console.log(animals);
animals.splice(2, 0, 'dog', 'cat', 'lion');
console.log(animals);

// sort method mutates array and returns it
// is most used when passing in a function to tell it how to sort
animals.sort();
console.log(animals);
