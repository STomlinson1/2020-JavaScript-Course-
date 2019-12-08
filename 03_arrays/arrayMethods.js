/* 
Common Array Methods:
  Push - add something to end, return new length of array
  Pop - remove something from end, return its value
  Shift - remove from start
  Unshift - add to start
  concat - merge two or more arrays, does not mutate original arrays, creates a new version
  includes - look for a value
  indexOf - 
  join - creates a string from arr
  reverse - reverses an array
  Slice - copy portion of an arr
  Splice - remove/replace elements
  Sort - sorts an array
*/
// initialize array
let topSongs = [
  'First time I Saw Your face',
  'God only knows',
  'A day in the Life',
  'Life on Mars'];

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
let dishesToDO = ['big platter'];
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
let fruits = ['apple','banana'];
let veggies = ['brocoli','lettuce'];
let meats = ['steak','burgers'];
// merge arrays
console.log(fruits.concat(veggies)); // [ 'apple', 'banana', 'brocoli', 'lettuce' ]
console.log(veggies.concat(fruits)); // [ 'brocoli', 'lettuce', 'apple', 'banana' ]

let allFood = fruits.concat(veggies,meats); //[ 'apple', 'banana', 'brocoli', 'lettuce', 'steak', 'burgers' ]
console.log(allFood);

