/* 
Logical AND (&&)
Logical OR (||)
NOT Operator (!)

Operator Precedence
  && takes precedence over ||
*/

// Example 1
let password = 'cat dog';
//check if password is at least 6 characters and has no spaces
if (password.length >= 6 && password.indexOf(' ') === -1) {
  console.log('Valid Password');
}else{
  console.log('Invalid Password');
}

// Example 2
let num = 3;
if (num >= 1 && num <= 10) {
  console.log('Number is between 1 and 10');
}else{
  console.log('Please give a number between 1 and 10');
}

// Example 3
let age = 78;
if (age < 6 || age >= 65) {
  console.log('You get in for free');
}else{
  console.log('you must pay');
}

// example 4
let loggedInUser;
// If there isn't a logged in user
if (!loggedInUser) {
  console.log('Get out of here');
}

// example 5
let flavor = 'grape';

if (flavor !== 'grape' && flavor !== 'cherry') {
  console.log('We dont have that flavor');
}else{
  console.log('We have that flavor');
}