/* 
The document object model 'The DOM' is a javascript representation of a webpage
It's your JS 'window' into the contents of a webpage
It's a bunch of objects that you can interact with via JS

The Document object is our entry point into the workd of the DOM. It contains representations of all the content on a page, plus tons of useful methods and properties.

Selecting Methods:
  we usually select and then manipulate
  getElementbyID
  getElementbyTagName
  getElementbyClassName
  querySelector
  querySelectorALL

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

//will always only get one object
document.getElementById('Bear');

//select by a type of element
//elements returned are stored in a list
//!looks like an array but it is not
//get stored as an HTML collection
const inputs = document.getElementsByTagName('input');

//store collection based off class name
document.getElementsByClassName('special');

// querySelector - a newer, all-in-one method to select a single element
//pass in a css style selector
//returns first match
let heading = document.querySelector('h1');
let paragraph = document.querySelector('p');
let photo = document.querySelector('#bear-photo');
let peas = document.querySelector('section ul li.special');

//querySelector all returns a collection of html elements
let lis = document.querySelectorAll('li');
