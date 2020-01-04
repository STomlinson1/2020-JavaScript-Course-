const input = document.querySelector('#username');

//key up and key down will fire for any key pressed and released
input.addEventListener('keydown', function(e) {
	console.log('KEY DOWN');
});

input.addEventListener('keyup', function(e) {
	console.log('KEY UP');
});

//keypress will only fire for keys that make something show up or enter
input.addEventListener('keypress', function(e) {
	console.log('KEY PRESS');
});

const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items');

//e is the event object that automatically gets passed when adding an event listener
//add event listener for keypress
addItemInput.addEventListener('keypress', function(e) {
	//if the enter key is pressed
	if (e.key === 'Enter') {
		//check for empty input
		if (!this.value) return;
		console.log(e);
		//add a new item to list
		//grab the text that was typed
		const newItemText = this.value;
		//create an 'li' and change its text
		const newItem = document.createElement('li');
		newItem.innerText = newItemText;
		//append the li to the ul
		itemsUL.appendChild(newItem);
		//reset the textbox to empty
		this.value = '';
	}
});
