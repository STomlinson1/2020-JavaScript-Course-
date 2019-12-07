//strings are text that contain characters
//can use single or double quotes, just be consistent
let firstName = 'Ziggy';
let lastName = "Tomlinson";

//can use quote inside string
let str = "Hey it's me";

//concatinate
let fullName =  firstName + ' '+ lastName;
console.log(fullName);

//strings are indexed starting from 0
//chicken
//0123456

// .length method
let mySong = "Surfin' USA";
console.log(mySong.length);

//return character at index in string
console.log(mySong[0]);
console.log(mySong[1]);
console.log(mySong[2]);
console.log(mySong[3]);

//return last character of string
console.log(mySong[mySong.length - 1]);

//to change a character at a specific position
//strings are immutable, cannot change individual character in string

/*String Methods
Strings come with a set of built-in methods, which are actions that can be performed on or with that particular string
We can do things like:
  Searching within a string
  Replacing parts of a string
  Changing case(upper/lower)

format: thing.method()
*/

let msg = "you are so grounded mr";
//msg becomes uppercase
msg = msg.toUpperCase();
console.log(msg);
//msg becomes lowercase
msg = msg.toLowerCase();
console.log(msg);

//trim method removes white space from begining and end
let color = "  purple    ";
color = color.trim();
console.log(color);

//can call multiple methods at once
let myColor = "   blue   ";
myColor = myColor.trim().toUpperCase();
console.log(myColor);


/* 
Different set of string methods
Some methods accept arguments that modify their behavior. We pass these arguments inside of the parentheses.
format: thing.method(arg)
*/

//indexOf will tell where in a string a given string(substring) occurs
let tvShow = "catdog";
tvShow.indexOf('cat'); // 0
tvShow.indexOf('dog'); // 3
tvShow.indexOf('z'); // -1(not found)


//slice takes slices of existing string and returns pieces
str = "Baseball";
//starting at index 4, will return the rest of string
//strings are immutable so its not changing str
console.log(str.slice(4));

//when  using slice, get pass two arguments. The first is what index the slice starts, Second where slice ends
str = "superhero"
console.log(str.slice(0,5));
console.log(str.slice(5,7));

//replace method replaces a substring with another string
str = "baseball is entertaining";
str = str.replace('entertaining','boring');
console.log(str);



