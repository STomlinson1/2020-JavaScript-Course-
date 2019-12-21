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

const form = document.querySelector('form');
form.innerHTML = '<b>I am a bold tag</b>';
