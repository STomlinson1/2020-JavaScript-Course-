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
