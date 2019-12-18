/* 
Methods
  We can add functions as properties on objects
*/

const math = {
	numbers  : [ 1, 2, 3, 4, 5 ],
	add      : function(x, y) {
		return x + y;
	},
	multiply : function(x, y) {
		return x * y;
	}
};

console.log(math.add(5, 6));

// short-hand syntax:
const auth = {
	username : 'TommyBot',
	login() {
		console.log('Logged you in');
	},
	logout() {
		console.log('GOODBYE');
	}
};

auth.login();
