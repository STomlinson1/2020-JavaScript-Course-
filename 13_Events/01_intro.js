/* List of Common events

clicks
drags
drops
hovers
scrolls
form submission
key presses
focus/blur
mouse wheel
double click
copying
pasting
audio start
screen resize
printing
*/

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
	console.log('you clicked the button');
});

btn.addEventListener('mouseover', () => {
	btn.innerText = 'GET OFF ME';
});

btn.addEventListener('mouseout', function() {
	btn.innerText = 'CLICK ME';
});

window.addEventListener('scroll', function() {
	console.log('Stop Scrolling');
});
