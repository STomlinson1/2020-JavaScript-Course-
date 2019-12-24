const newh2 = document.createElement('h2');
newh2.innerText = 'I Like animals';
newh2.classList.add('special');

const section = document.querySelector('section');
section.appendChild(newh2);

const newImg = document.createElement('img');
newImg.src = 'https://source.unsplash.com/daily';
newImg.style.width = '   4300px';

document.body.appendChild(newImg);

const newLink = document.createElement('a');
newLink.innerText = 'Click Here for video';
newLink.href = 'https://www.youtube.com/watch?v=itvkCJ5O8R0';

const firstP = document.querySelector('p');
firstP.appendChild(newLink);

const parentUL = document.querySelector('ul');
const newLI = document.createElement('li');
newLI.innerText = 'This is a new LI';
parentUL.appendChild(newLI);
const firstLI = document.querySelector('li.todo');

// in order to insert before a specific element
//first you must select the parent, and then the element you want to insert and the element you want to insert before
parentUL.insertBefore(newLI, firstLI);

const lastLI = document.querySelectorAll('li.todo')[2];

parentUL.insertBefore(newLI, lastLI);

firstP.insertAdjacentElement('beforebegin', newLI);

// insertAdjacent is the same but takes different arguement. It uses string arguments 'beforebegin', 'afterbeing', 'beforeend', 'afterend'

/* Visualization of how this works

<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/

//append will make an element the last child
//prepend will make an alement the first child
//these do not work in IE
//can insert multiple at once

firstP.append(newLI, newLink);

// Removing elements
//removeChild()

const lastUL = document.querySelector('#last');
const removeMe = lastUL.querySelector('.special');

lastUL.removeChild(removeMe);
