/* 
CALLBACK FUNCTIONS
  
  A callback function is a function passed into another function as an argument, which is then invoked inside the outer function.
*/

// anonymous functions are often used as callback functions
//Example 1
setTimeout(function() {
	alert('Welcome!');
}, 3000);

// Example 2
const btn = document.querySelector('button');
btn.addEventListener('click', function() {
	alert('WHY DID YOU CLICK ME');
});
