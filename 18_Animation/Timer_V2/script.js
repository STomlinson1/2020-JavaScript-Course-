class Timer {
	constructor(timeInput, startBtn, pauseBtn, callbacks) {
		this.timeInput = timeInput;
		this.startBtn = startBtn;
		this.pauseBtn = pauseBtn;
		this.intervalID = null;
		if (callbacks) {
			this.onStart = callbacks.onStart;
			this.onComplete = callbacks.onComplete;
			this.onTick = callbacks.onTick;
		}
		startBtn.addEventListener('click', this.start);
		pauseBtn.addEventListener('click', this.pause);
	}

	start = () => {
		if (!this.intervalID) {
			console.log('In start method');
			this.tick();
			this.intervalID = setInterval(this.tick, 10);
			if (this.onStart) {
				this.onStart(this.timeRemaining);
			}
		}
	};

	pause = () => {
		console.log('In pause method');
		clearInterval(this.intervalID);
		this.intervalID = null;
	};

	tick = () => {
		if (this.timeInput.value <= 0) {
			this.pause();
			if (this.onComplete) {
				this.onComplete();
			}
		} else {
			this.timeRemaining = this.timeRemaining - 0.01;
			if (this.onTick) {
				this.onTick(this.timeRemaining);
			}
		}
	};

	get timeRemaining() {
		return parseFloat(this.timeInput.value);
	}
	set timeRemaining(time) {
		this.timeInput.value = time.toFixed(2);
	}
}

const timeInput = document.getElementById('timer-input');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const circle = document.querySelector('circle');
let perimeter = 2 * Math.PI * circle.getAttribute('r');
circle.setAttribute('stroke-dasharray', perimeter);
let duration;
let currentOffset;

const timer = new Timer(timeInput, startBtn, pauseBtn, {
	onStart(totalDuration) {
		duration = totalDuration;
		console.log('Started Timer!');
	},
	onComplete() {
		console.log('Timer Finished!');
	},
	onTick(timeRemaining) {
		currentOffset = perimeter * timeRemaining / duration - perimeter;
		circle.setAttribute('stroke-dashoffset', currentOffset);
		console.log('Ticked');
	}
});
