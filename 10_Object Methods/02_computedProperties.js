// Dynamic way of adding properties to objects

const role = 'host';
const role2 = 'Director';
const person = 'Jools Holland';
const person2 = 'James Cameran';

// old way:
// const team = {};
// team[role] = person;
// team[role2] = person2;

const team = {
	[role]  : person,
	[role2] : person2
};
//{ host: 'Jools Holland', Director: 'James Cameran' }
console.log(team);

// functions that accepts an object and a property and returns a copy of the objecy with the new property
// OLD WAY:
// function addProp(obj, k, y) {
// 	const copy = { ...obj };
// 	copy[k] = y;
// 	return copy;
// }

const addProp = (obj, k, y) => {
	return { ...obj, [k]: y };
};

const res = addProp(team, 'happy', ':)');
console.log(res);
