/* 
SCOPE
  Variable 'visibility' - the location where a variable is defined dictates where we have access to that variable
  
  Function Scope - variables are scoped to their functions

  Block Scope

  Lexical Scope - Functions declared inside functions
*/

// Lexical Scope example
function outer() {
	let movie = 'Black Panther';

	function inner() {
		//movie looks up to closest scope for value
		console.log(movie.toUpperCase());
	}
	inner();
}
outer();
inner(); //can't be accessed
