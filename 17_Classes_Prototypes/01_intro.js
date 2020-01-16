/* 
Prototypes:
  Prototypes are the mechanism by which JavaScript objects inherit from one another

  We have an object that is the prototype for other types of objects.
  Example: any array we create has a reference to the Array prototype

  Prototypes are template objects that typically contain methods and we can create multiple objects that share the same prototype

*/

// Example Factory Functions
function hex(r, g, b) {
	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r, g, b) {
	return `rgb(${r},${g},${b})`;
}
// this is a factory function
// This function makes and returns an object every time it is called. The resulting objects all follow the same 'recipe'
// The drawback is that each object created will have its own unique copy of the methods
// theres no reason to have a unique copy of the function itself
function makeColor(r, g, b) {
	const color = {};
	color.r = r;
	color.g = g;
	color.b = b;
	color.rgb = function() {
		// destructure
		const { r, g, b } = this;
		return `rgb(${r},${g},${b})`;
	};
	color.hex = function() {
		const { r, g, b } = this;
		return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	};
	return color;
}

const firstColor = makeColor(35, 255, 150);
