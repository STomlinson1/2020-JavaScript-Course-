/* 
All values have inherent truthy or falsy boolean value
Falsy values:
  false
  0
  ''(empty string)
  null
  undefined
  Nan
Everything else is truthy
*/

//Example 1
let mystery = 5;
if(mystery){
  console.log('Truthy');
}else{
  console.log('Falsy');
}

