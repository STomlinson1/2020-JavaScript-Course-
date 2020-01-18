/* 
Things our program does:
  1. Displays a timer
  2. Shows an animated border around the timer
*/

//select DOM elements
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

// create Timer object from class Timer
const timer = new Timer(durationInput, startButton, pauseButton, {
	onStart() {
		console.log('Timer started');
	},
	onTick() {
		console.log('Timer just ticked down');
	},
	onComplete() {
		console.log('Timer has finished');
	}
});
