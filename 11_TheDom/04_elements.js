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
