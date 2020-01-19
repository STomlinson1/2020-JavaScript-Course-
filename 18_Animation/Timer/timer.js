class Timer {
	// pass in references to DOM elements
	// optionally pass in an object of callbacks
	constructor(durationInput, startButton, pauseButton, callbacks) {
		//store a reference to each element in the class
		this.durationInput = durationInput;
		this.startButton = startButton;
		this.pauseButton = pauseButton;
		if (callbacks) {
			this.onStart = callbacks.onStart;
			this.onTick = callbacks.onTick;
			this.onComplete = callbacks.onComplete;
		}
		//add an event listener when the timer object is created
		this.startButton.addEventListener('click', this.start);
		this.pauseButton.addEventListener('click', this.pause);
	}

	//use arrow function to fix the 'this' value
	start = () => {
		if (this.onStart) {
			this.onStart(this.timeRemaining);
		}
		//since we want the timer to start immediately we call tick once
		this.tick();
		//this will run tick method every second
		this.intervalID = setInterval(this.tick, 10);
		console.log(this.intervalID);
	};

	pause = () => {
		clearInterval(this.intervalID);
	};

	tick = () => {
		if (this.timeRemaining <= 0) {
			this.pause();
			if (this.onComplete) {
				this.onComplete();
			}
		} else {
			// const timeRemaining = this.timeRemaining;
			// this.durationInput.value = timeRemaining - 1;
			this.timeRemaining = this.timeRemaining - 0.01;
			if (this.onTick) {
				this.onTick(this.timeRemaining);
			}
		}
	};

	//getters and setters
	// can use timeRemaining as an instance variable
	get timeRemaining() {
		//retreive duration input from dom element, convert it from a string to a float and return it
		return parseFloat(this.durationInput.value);
	}

	set timeRemaining(time) {
		this.durationInput.value = time.toFixed(2);
	}
}
