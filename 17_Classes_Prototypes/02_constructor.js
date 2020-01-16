/* 
New Operator
  The 'new' operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function. The new keyword does the following things:
    1.Creates a blank, plain JavaScript object;
    2.Links(sets the constructor of) this object to another object
    3.Passes the newly created object from Step 1 as the 'this' context
    4.Returns 'this' if the function doesnt return its own object

*/

// Example using the 'new' operator
function Car(make, model, year, owner) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.owner = owner;
}

const car1 = new Car('Honda', 'Civi', 2019);
console.log(car1.color);
Car.prototype.color = 'original color';
console.log(car1.color);
console.log(car1);

function Person(first, last, age, gender) {
	this.first = first;
	this.last = last;
	this.age = age;
	this.gender = gender;
}

// add method to the prototype
Car.prototype.getOwnerName = function() {
	let { owner } = this;
	let { first } = owner;
	console.log(first);
};

const person1 = new Person('Stephon', 'Tomlinson', 27, 'male');
console.log(person1);

const myCar = new Car('Hyundai', 'Genesis', '2010', person1);
console.log(myCar);
// console.log(myCar.owner.first);
myCar.getOwnerName();

//Example 2
function Color(r, g, b) {
	this.r = r;
	this.g = g;
	this.b = b;
}

Color.prototype.rgb = function() {
	// destructure
	const { r, g, b } = this;
	return `rgb(${r},${g},${b})`;
};

Color.prototype.hex = function() {
	const { r, g, b } = this;
	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function(a = 1.0) {
	// destructure
	const { r, g, b } = this;
	return `rgba(${r},${g},${b},${a})`;
};

const color1 = new Color(255, 20, 150);
console.log(color1);
console.log(color1.rgb());
console.log(color1.hex());

document.body.style.backgroundColor = color1.rgb();
