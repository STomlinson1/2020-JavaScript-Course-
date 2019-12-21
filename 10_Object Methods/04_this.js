/* 
THIS

this -refernce to an object that is the current execution scope

the window is the global scope of the browser
*/

const person = {
	first    : 'Stephon',
	last     : 'Tomlinson',
	nickName : 'Fonzy',
	fullname() {
		//can destructure 'this'
		const { first, last, nickName } = this;
		return `${first} ${last} AKA ${nickName}`;
	},
	printBio() {
		const fullName = this.fullname();
		console.log(`${fullName} is a person`);
	}
};
person.printBio();

// The value of 'this' depends on the invocation context of the function it is used in
// when we use this inside of a method, it is a way of accessing the partent object
//the value changes depending on how the method is called

// const printBio = person.printBio;
// printBio();
// person.laugh();
// this behaves differently in arrow functions

//'this' uses its parents 'this'
const annoyer = {
	phrases    : [ 'literally', 'cray cray', 'i cant even', 'totes', 'yolo', 'cant stop' ],
	pickPhrase() {
		const { phrases } = this;
		const indx = Math.floor(Math.random() * phrases.length);
		return phrases[indx];
	},
	start() {
		console.log(this.pickPhrase());
		//we need to use an arrow function here so 'this' can use the start() 'this'
		//creates a refernce to the object for the nested function
		this.timerId = setInterval(() => {
			console.log(this.pickPhrase());
		}, 3000);
	},
	stop() {
		clearInterval(this.timerId);
	}
};

annoyer.start();
//this when used in an arrow function will be the same as its parent function.
