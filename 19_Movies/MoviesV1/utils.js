// Utility functions

//debounce refactor to be its own helper function
const debounce = (func, delay = 1000) => {
	let timeoutID;
	return (...args) => {
		if (timeoutID) {
			clearTimeout(timeoutID);
		}
		timeoutID = setTimeout(() => {
			func.apply(null, args);
		}, delay);
	};
};
