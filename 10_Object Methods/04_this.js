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
	},
	laugh    : () => {
		console.log(this);
	}
};
person.printBio();

// The value of 'this' depends on the invocation context of the function it is used in
// when we use this inside of a method, it is a way of accessing the partent object
//the value changes depending on how the method is called

const printBio = person.printBio;
printBio();

// this behaves differently in arrow functions
