/* 
Loops to do things repeatedly
  allows us to repeat code
  types of loops:
    for loop
    while loop
    for each
    for of
*/

// for loop
for (let i = 1; i <= 20; i++) {
	console.log(i ** 2);
}

// loop through array
const examScores = [ 98, 77, 84, 92, 57, 22 ];
for (let i = 0; i < examScores.length; i++) {
	console.log(examScores[i]);
}

// initialize array of objects
const myStudents = [
	{
		firstName : 'Zeus',
		grade     : 86
	},
	{
		firstName : 'Artemis',
		grade     : 98
	},
	{
		firstName : 'Apollo',
		grade     : 87
	},
	{
		firstName : 'Hera',
		grade     : 90
	}
];

// loop through array, print each object
for (let i = 0; i < myStudents.length; i++) {
	let student = myStudents[i];
	console.log(`${student.firstName} scored ${student.grade}`);
}

// loop through string backwards
const word = 'stressed';
let reversedWord = '';
for (let i = word.length - 1; i >= 0; i--) {
	console.log(word[i]);
	reversedWord += word[i];
	console.log(reversedWord);
}

// print average grade of all students
let totalGrade = 0;
for (let i = 0; i < myStudents.length; i++) {
	totalGrade += myStudents[i].grade;
}
let avgGrade = totalGrade / myStudents.length;
console.log(avgGrade);
