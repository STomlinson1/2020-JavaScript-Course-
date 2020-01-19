/* 
Things our program does:
  1. Displays a timer
  2. Shows an animated border around the timer
*/

//select DOM elements
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

// format the svg circle attributes
let currentOffset = 0;
let duration;

//formula to calculate 'stroke-dashoffset'
// offset = (perimeter * timeRemaining) / totalDuration - perimeter

// create Timer object from class Timer
const timer = new Timer(durationInput, startButton, pauseButton, {
	onStart(totalDuration) {
		duration = totalDuration;
		console.log('Timer started');
	},
	onTick(timeRemaining) {
		console.log('Timer just ticked down');
		circle.setAttribute(
			'stroke-dashoffset',
			perimeter * timeRemaining / duration - perimeter
		);
	},
	onComplete() {
		console.log('Timer has finished');
	}
});
