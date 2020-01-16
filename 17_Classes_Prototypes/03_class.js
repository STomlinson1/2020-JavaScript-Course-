/* 
class
  The class declaration creates a new class with a given name using prototype-based inheritance

*/

// Example 1
class Color {
	constructor(r, g, b) {
		this.r = r;
		this.g = g;
		this.b = b;
	}

	innerRGB() {
		// destructure
		const { r, g, b } = this;
		return `${r},${g},${b}`;
	}

	rgb() {
		return `rgb(${this.innerRGB()})`;
	}

	rgba(a = 1.0) {
		return `rgba(${this.innerRGB()},${a})`;
	}

	hex() {
		// destructure
		const { r, g, b } = this;
		return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	}
}

const color1 = new Color(255, 20, 150);
console.log(color1);
console.log(color1.rgb());
console.log(color1.hex());
console.log(color1.rgba());
console.log(color1.rgba(0.5));

// Example 2
class Pet {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	eat() {
		return `${this.name} is eating!`;
	}
}

class Cat extends Pet {
	constructor(name, age, livesLeft = 9) {
		// super references the class we are extending from
		super(name, age);
		this.livesLeft = livesLeft;
	}

	meow() {
		return 'Meowww';
	}
}

class Dog extends Pet {
	bark() {
		return 'woooof';
	}
}

const dog1 = new Dog('Cozmo', 8);
console.log(dog1);
const cat1 = new Cat('whiskers', 11);
console.log(cat1);
