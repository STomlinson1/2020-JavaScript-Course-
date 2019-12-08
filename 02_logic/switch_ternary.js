/* 
Switch Statement
*/

// Example 1
let day = 6;
switch (day) {
  case 1:
    console.log('Sunday');
    break;
  case 2:
    console.log('Monday');
    break;
  case 3:
    console.log('Tuesday');
    break;
  case 4:
    console.log('Wednesday');
    break;
  case 5:
    console.log('Thursday');
    break;
  case 6:
    console.log('Friday');
    break;
  case 7:
    console.log('Saturday');
    break;
  default:
    console.log('Invalid Day');
    break;
}

let emoji = 'sad face';
switch (emoji) {
  case 'sad face':
  case 'happy face':
    console.log('yellow');
    break;
  case 'eggplant':
    console.log('purple');
    break;
  case 'heart':  
  case 'lips':
    console.log('red');
    break;  
}

/* 
Ternary Operator
  format:  condition ? expIfTrue : expIfFalse
*/

// Example 1
let num = 7;
num === 7 ? console.log('Lucky!') : console.log('Bad!');

// Example 2
let status = 'offline';
//if status is offline, set color to red, else set color to green 
let color = status === 'offline' ? 'red' : 'green';
console.log(color);