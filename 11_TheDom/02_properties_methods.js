/* 
!The Most Important Properties & Methods!!

classList
getAttribute()
setAttribute()
appendChild()
append()
removeChild()
remove()
creatElement
innerText
textContent
innerHTML
value
parentElement
children
nextSibling
previousSibling
style
*/

const h1 = document.querySelector('h1');
//innerText is aware
//will use this one more often
h1.innerText = 'My New Webpage';
//just gives text from html file
h1.textContent = 'More pizza';

// const form = document.querySelector('form');
// form.innerHTML = '<b>I am a bold tag</b>';
const inputs = document.querySelectorAll('input');

//grab an input by its type
const range = document.querySelector('input[type="range"]');

//set or get an attribute
range.getAttribute('max');
range.setAttribute('min', '-500');
range.setAttribute('type', 'radio');

//find parent of element
const firstLI = document.querySelector('li');
firstLI.parentElement;

let ul = document.querySelector('ul');
ul.children;

//how to change multiple elements
const allLis = document.querySelectorAll('li');
for (let li of allLis) {
	li.innerHTML = 'WE ARE <b>THE CHAMPIONS</b>';
}

//adding style this way is not the preffered method
//style property only contains inline style
h1.style.color = 'orchid';
const p = document.querySelector('p');
p.style.backgroundColor = 'teal';

const colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'purple' ];

allLis.forEach((li, i) => {
	const color = colors[i];
	li.style.color = color;
});

//use getComputedStyle()
